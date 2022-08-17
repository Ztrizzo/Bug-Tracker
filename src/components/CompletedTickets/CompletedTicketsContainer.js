import React, { useEffect, useState } from 'react';
import CompletedTickets from './CompletedTickets';
import axios from 'axios';

export default function CompletedTicketsContainer(){
  const [tickets, setTickets] = useState();

  useEffect(() => {
    const loadTickets = async () => {
      const tickets = (await axios.get('/api/tickets/completed')).data;
      setTickets(tickets);
    }
    loadTickets();
  }, [])

  if(!tickets) return null;
  
  return(
    <CompletedTickets tickets={tickets}/>
  )
}