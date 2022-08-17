import React from "react";
import Comments from "../Comments";
import { Button } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTheme } from "@emotion/react";
import PrimaryButton from "../../styledComponents/Buttons/PrimaryButton";
import SecondaryButton from "../../styledComponents/Buttons/SecondaryButton";
import TertiaryButton from "../../styledComponents/Buttons/TertiaryButton";

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
  const theme = useTheme();

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
            <SecondaryButton variant='contained' type="submit">Assign</SecondaryButton>
          </form>
          
        :
          <span>{ticket.user ? ticket.user.name : 'Unassigned'}</span>
        }
      </h4>
      {role === 'Manager' ? 
        <TertiaryButton variant='contained' onClick={handleDelete}>Delete</TertiaryButton>
      :
        null
      }
      {role === 'Manager' || role === 'Developer' ? 
        <PrimaryButton variant='contained' onClick={completeTicket}>Complete</PrimaryButton>
      :
        null
      }
      <Comments comments={ticket.comments} ticketId={ticket.id} loadTicket={loadTicket}/>
    </div>
  )
}