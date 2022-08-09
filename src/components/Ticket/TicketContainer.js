import Ticket from './Ticket';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function TicketContainer(){
  const { ticketId } = useParams();
  const {user, isLoading, getAccessTokenSilently} = useAuth0();
  const [ticket, setTicket] = useState({});
  const [developers, setDevelopers] = useState([]);
  const [assignedDeveloper, setAssignedDeveloper] = useState('unassigned')
  let role;

  useEffect(() => {
    const loadTicket = async () => {
      setTicket((await axios.get(`/api/tickets/${ticketId}`)).data);
    }
    loadTicket();
  }, [])

  useEffect(() => {
    const loadDevelopers = async () => {
      setDevelopers((await axios.get('/api/developers')).data);
    }
    loadDevelopers();
  }, [])

  useEffect(() => {
    //find developer assigned to ticket and set as default
    setAssignedDeveloper(ticket?.user || 'unassigned')
  }, [developers, ticket.userId])

  if(!isLoading){
    role = user ? user[`http://localhost:8080/roles`][0] : undefined;
  }

  const assignDeveloper = (evt) => {
    setAssignedDeveloper(evt.target.value);
  }

  const onSubmit = async (evt) => {
    evt.preventDefault();
    const accessToken = await getAccessTokenSilently({
      audience: `http://localhost:8080/api`,
      scope: "read:current_user",
    });

    await axios.put('/api/tickets/assign', {
      ticketId: ticketId,
      userId: assignedDeveloper
    },{
      headers:{
        authorization: `Bearer ${accessToken}`
      }
    })
  }



  const handleDelete = async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      await axios.delete(`/api/tickets/${ticketId}`, {
        headers:{
          Authorization: `Bearer ${accessToken}`
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  return(
    <Ticket 
      ticket={ticket} 
      role={role} 
      developers={developers} 
      assignedDeveloper={assignedDeveloper} 
      assignDeveloper={assignDeveloper}
      onSubmit={onSubmit}
      handleDelete={handleDelete}/>
  )
}