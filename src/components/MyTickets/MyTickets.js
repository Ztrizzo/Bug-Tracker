import React from "react";
import TicketGrid from "../TicketGrid";


export default function MyTickets({tickets, user}){
  return (
    <div>
      <h1>{user.name}'s Tickets</h1>
      <TicketGrid allTickets={tickets}/>
    </div>
  )

  
}