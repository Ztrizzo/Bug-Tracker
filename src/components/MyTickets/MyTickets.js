import React from "react";
import TicketGrid from "../TicketGrid";


export default function MyTickets({tickets, user}){
  return (
    <div>
      <TicketGrid allTickets={tickets}/>
    </div>
  )

  
}