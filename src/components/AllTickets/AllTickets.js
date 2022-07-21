import React from "react";
import { Link } from "react-router-dom";

export default function AllTickets({ allTickets }){

  return (
    <div>
      {allTickets.map( ticket => {
        return(
          <div key={ticket.id} >
            <Link to={`/tickets/${ticket.id}`}>{ticket.title}</Link>
          </div>
        )
      })}
    </div>
  )
}