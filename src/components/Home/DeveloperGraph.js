import { useTheme } from "@emotion/react";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import Card from '@mui/material/Card';

import { Typography } from "@mui/material";

export default function DeveloperGraph({ allTickets }){
  const theme = useTheme();

  const ticketsPerDeveloper = allTickets.reduce((accum, ticket) => {
    if(!ticket.assignedTo)
      accum['Unassigned'] += 1;
    else if(accum[ticket.assignedTo.name]){
      accum[ticket.assignedTo.name]++;
    }
    else{
      accum[ticket.assignedTo.name] = 1;
    }
    return accum;
  }, {'Unassigned': 0})
  
  const data = {
    labels: Object.keys(ticketsPerDeveloper),
    datasets: [{
      label: 'Tickets per Developer',
      data: Object.values(ticketsPerDeveloper),
      backgroundColor: Object.keys(ticketsPerDeveloper).map((_) => theme.palette.secondary[Object.keys(theme.palette.secondary)[Math.floor(Math.random() * Object.keys(theme.palette.secondary).length)]]), //Each dev gets a randomly generated color
      hoverOffset:4
    }]
    
  }
  
  return (
    <div>
      <Typography variant="h4">Developer Graph</Typography>
      <Card className="graph-container">
        
        <Doughnut data={data}/>
      </Card>
    </div>

  )
}