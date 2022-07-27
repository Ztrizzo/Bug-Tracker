import React from "react";

export default function Ticket({ ticket, role, developers, assignedDeveloper, assignDeveloper }){
  return(
    <div>
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <h4>created by: {ticket.createdBy}</h4>
      <h4>assigned to: 
        {role === 'Manager' ? 
          <form>
            <select
              value={assignedDeveloper}
              onChange={assignDeveloper}
            >
              <option value='unassigned'>Unassigned</option>
              {developers.map( developer => {
                return <option key={developer.user_id} value={developer.user_id}>{developer.name}</option>
              })}
            </select>
            <button>Assign</button>
          </form>
          
        :
          <span>{ticket.userId}</span>
        }
      </h4>
      
      
    </div>
  )
}