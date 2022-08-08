import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function DeveloperGraph({ allTickets }){

  const ticketsPerDeveloper = allTickets.reduce((accum, ticket) => {
    if(!ticket.user)
      accum['Unassigned'] += 1;
    else if(accum[ticket.user.name]){
      accum[ticket.user.name]++;
    }
    else{
      accum[ticket.user.name] = 1;
    }
    return accum;
  }, {'Unassigned': 0})
  
  const data = {
    labels: Object.keys(ticketsPerDeveloper),
    datasets: [{
      label: 'Tickets per Developer',
      data: Object.values(ticketsPerDeveloper),
      backgroundColor: Object.keys(ticketsPerDeveloper).map((_) => '#' + Math.floor(Math.random()*16777215).toString(16)), //Each dev gets a randomly generated color
      hoverOffset:4
    }]
    
  }
  
  return (
    <div>
      <h1>Developer Graph</h1>
      <Doughnut data={data}/>
    </div>
  )
}