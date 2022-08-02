// import React from "react";
// import { Link } from "react-router-dom";

// export default function AllTickets({ allTickets }){

//   return (
//     <div>
//       {allTickets.map( ticket => {
//         console.log(ticket);
//         return(
//           <div key={ticket.id} >
//             <Link to={`/tickets/${ticket.id}`}>{ticket.title}</Link>
//           </div>
//         )
//       })}
//     </div>
//   )
// }


import * as React from "react";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

const columns = [
  {field: 'priority', headerName: 'Priority', width: 110},
  {field: 'title', headerName: 'Title', width: 500},
  {field: 'assignedTo', headerName: 'Assigned To'},
  {field: 'posted', headerName: 'Posted', width: 100}
]

export default function AllTickets({ allTickets }){
  allTickets = allTickets.map(ticket => {
    return{
      ...ticket,
      assignedTo: ticket.user?.name || 'unassigned',
      priority: Array(ticket.priority).fill('★').join(''),
      posted: timeAgo.format(Date.now() - (Date.now() - new Date(ticket.createdAt)))
    }
  })
  return (
    <div style={{height: '65vh'}}>
      <DataGrid
        rows={allTickets}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}