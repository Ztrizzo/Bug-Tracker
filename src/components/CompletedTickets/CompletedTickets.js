import React from "react";
import TicketGrid from "../TicketGrid";

export default function CompletedTickets({tickets}){
  return(
    <div>
      <h1>Completed Tickets</h1>
      <TicketGrid allTickets={tickets}/>
    </div>
  )
}