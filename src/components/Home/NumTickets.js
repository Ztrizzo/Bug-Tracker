import React from "react";
import Card from '@mui/material/Card';
import { Typography } from "@mui/material";

export default function NumTickets({ allTickets }){
  const numberOfTickets = allTickets.length;
  
  return(
    <div>
      <Typography style={{textAlign: 'center'}} variant="h4">Total Number of Tickets</Typography>
      <Card className="graph-container">
        
        <h2 style={{textAlign: 'center'}}>{numberOfTickets}</h2>
      </Card>
    </div>

  )
}