import React from "react";

export default function NumTickets({ allTickets }){
  const numberOfTickets = allTickets.length;
  
  return(
    <div>
      <h1>Total Number of Tickets</h1>
      <h2>{numberOfTickets}</h2>
    </div>
  )
}