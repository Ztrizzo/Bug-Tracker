import React from "react";

export default function Ticket({ ticket }){
  return(
    <div>
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <h4>{ticket.createdBy}</h4>
      <h4>assigned to: {ticket.userId}</h4>
    </div>
  )
}