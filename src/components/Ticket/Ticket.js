import React from "react";
import Comments from "../Comments";
import { Button } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Ticket({ 
  ticket,
  role, 
  developers, 
  assignedDeveloper, 
  assignDeveloper, 
  onSubmit,
  handleDelete,
  loadTicket,
  completeTicket
 }){
  return(
    <div>
      <h3>{ticket.title}
        {ticket.completed ? 
          <CheckCircleIcon/>
        :
          null
        }
      </h3>
      <p>{ticket.description}</p>
      <h4>created by: {ticket.createdBy}</h4>
      <h4>ticket priority: {ticket.priority}</h4>
      <h4>assigned to: 
        {role === 'Manager' ? 
          <form onSubmit={onSubmit}>
            <select
              value={assignedDeveloper}
              onChange={assignDeveloper}
            >
              <option value='unassigned'>Unassigned</option>
              {developers.map( developer => {
                return <option key={developer.user_id} value={developer.user_id}>{developer.name}</option>
              })}
            </select>
            <Button type="submit">Assign</Button>
          </form>
          
        :
          <span>{ticket.user ? ticket.user.name : 'Unassigned'}</span>
        }
      </h4>
      {role === 'Manager' ? 
        <Button onClick={handleDelete} sx={{color: 'red'}}>Delete</Button>
      :
        null
      }
      {role === 'Manager' || role === 'Developer' ? 
        <Button sx={{color: 'green'}} onClick={completeTicket}>Complete</Button>
      :
        null
      }
      <Comments comments={ticket.comments} ticketId={ticket.id} loadTicket={loadTicket}/>
    </div>
  )
}