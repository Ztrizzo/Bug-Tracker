import Ticket from './Ticket';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function TicketContainer(){
  const { ticketId } = useParams();
  const {user, isLoading} = useAuth0();
  const [ticket, setTicket] = useState({});
  const [developers, setDevelopers] = useState([]);
  const [assignedDeveloper, setAssignedDeveloper] = useState(
    developers.find( dev => dev.user_id === ticket.userId)?.user_id || 'unassigned'
  )
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

  if(!isLoading){
    role = user ? user[`http://localhost:8080/roles`][0] : undefined;
  }

  const assignDeveloper = (evt) => {
    setAssignedDeveloper(evt.target.value);
  }
 
  
  return(
    <Ticket ticket={ticket} role={role} developers={developers} assignedDeveloper={assignedDeveloper} assignDeveloper={assignDeveloper}/>
  )
}