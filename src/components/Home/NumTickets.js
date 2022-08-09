import React from "react";

export default function NumTickets({ allTickets }){
  const numberOfTickets = allTickets.length;
  
  return(
    <div>
      <h1 style={{textAlign: 'center'}}>Total Number of Tickets</h1>
      <h2 style={{textAlign: 'center'}}>{numberOfTickets}</h2>
    </div>
  )
}