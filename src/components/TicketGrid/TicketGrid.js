import * as React from "react";
import { DataGrid } from '@mui/x-data-grid';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { useNavigate } from "react-router-dom";
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');



export default function AllTickets({ allTickets }){
  const navigate = useNavigate();
  const handleOnCellClick = ({ id }) =>{
    navigate(`/tickets/${id}`);
  }

  const columns = [
    {field: 'priority', headerName: 'Priority', width: 110},
    {field: 'title', headerName: 'Title', width: 500},
    {field: 'assignedTo', headerName: 'Assigned To'},
    {field: 'posted', headerName: 'Posted', width: 100, renderCell: (params) => {
      return(
        <div>{timeAgo.format(params.formattedValue)}</div>
      )
    }},
  ]
  //field only exists if ticket is completed
  if(allTickets[0]?.completedBy) columns.push({field: 'completedBy', headerName: 'Completed By'})

  
  allTickets = allTickets.map(ticket => {
    return{
      ...ticket,
      assignedTo: ticket.assignedTo?.name || 'unassigned',
      priority: Array(ticket.priority).fill('★').join(''),
      posted: Date.now() - (Date.now() - new Date(ticket.createdAt)), //milliseconds since created
      completedBy: ticket.completedBy?.name || null
    }
  })
  return (
    <div style={{height: '65vh'}}>
      <DataGrid
        rows={allTickets}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        onCellClick={handleOnCellClick}
      />
    </div>
  )
}