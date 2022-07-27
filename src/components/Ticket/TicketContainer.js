import Ticket from './Ticket';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function TicketContainer(){
  const { ticketId } = useParams();
  const {user, isLoading} = useAuth0();
  const [ticket, setTicket] = useState({})
  let role;



  useEffect(() => {
    const loadTicket = async () => {
      setTicket((await axios.get(`/api/tickets/${ticketId}`)).data);
    }
    loadTicket();
  }, [])

  if(!isLoading){
    role = user ? user[`http://localhost:8080/roles`][0] : undefined;
  }
 
  
  return(
    <Ticket ticket={ticket} role={role}/>
  )
}