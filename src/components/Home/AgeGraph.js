import React from "react";
import { Bar } from "react-chartjs-2";

export default function AgeGraph({ allTickets }){
  
  const ticketAges = allTickets.reduce((accum, ticket) => {
    const numDaysSinceCreation = (new Date() - new Date(ticket.createdAt)) / 1000 / 60 / 60 / 24;
    if(numDaysSinceCreation < 1)
      accum['Less than 1 day']++;
    else if(numDaysSinceCreation < 7)
      accum['Less than 1 Week']++;
    else if(numDaysSinceCreation < 30)
      accum['Less than 1 Month']++;
    else if(numDaysSinceCreation < 90)
      accum['Less than 3 Months']++;
    else
      accum['Greater than 1 Year']++;

    return accum;
  }, {
    'Greater than 1 Year': 0,
    'Less than 3 Months': 0,
    'Less than 1 Month': 0,
    'Less than 1 Week': 0,
    'Less than 1 day': 0
  })
  
  const data = {
    labels: Object.keys(ticketAges),
    datasets:[{
      label: 'Ticket Ages',
      data: Object.values(ticketAges)
    }]
  }
  
  return(
    <div>
      <h1>Ticket Age</h1>
      <Bar data={data}/>
    </div>
  )
}