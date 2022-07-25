import React from "react";
import { Link } from "react-router-dom";


export default function MyTickets({ tickets, user }){
  return(
    <div>
      <h1>{user.name}'s Tickets</h1>

      {tickets.map(ticket => {
        return(
          <div key={ticket.id}>
            <Link to={`/api/tickets/${ticket.id}`}>{ticket.title}</Link>
          </div>

        )
      })}
    </div>
  )
}