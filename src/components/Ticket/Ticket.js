import React from "react";
import Comments from "../Comments";

export default function Ticket({ 
  ticket,
  role, 
  developers, 
  assignedDeveloper, 
  assignDeveloper, 
  onSubmit,
  handleDelete,
  loadTicket
 }){
  return(
    <div>
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <h4>created by: {ticket.createdBy}</h4>
      <h4>ticket priority: {ticket.priority}</h4>
      <h4>assigned to: 
        {role === 'Manager' ? 
          <form onSubmit={onSubmit}>
            <select
              value={assignedDeveloper.user_id}
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
          <span>{assignedDeveloper.name ? assignedDeveloper.name : 'Unassigned'}</span>
        }
      </h4>
      {role === 'Manager' ? 
        <button onClick={handleDelete}>Delete</button>
      :
        null
      }
      <Comments comments={ticket.comments} ticketId={ticket.id} loadTicket={loadTicket}/>
    </div>
  )
}