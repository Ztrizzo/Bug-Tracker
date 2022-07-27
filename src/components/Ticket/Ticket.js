import React from "react";

export default function Ticket({ ticket, role }){
  return(
    <div>
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <h4>created by: {ticket.createdBy}</h4>
      <h4>assigned to: 
        {role === 'Manager' ? 
          <select>
            <option>test</option>
          </select>
        :
          <span>{ticket.userId}</span>
        }
      </h4>
      
      
    </div>
  )
}