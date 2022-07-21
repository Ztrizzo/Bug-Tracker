import Ticket from './Ticket';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function TicketContainer(){
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState({})

  useEffect(() => {
    const loadTicket = async () => {
      setTicket((await axios.get(`/api/tickets/${ticketId}`)).data);
    }
    loadTicket();
  }, [])

  return(
    <Ticket ticket={ticket}/>
  )
}