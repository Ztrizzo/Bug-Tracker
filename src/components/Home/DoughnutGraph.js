import React from "react";
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
export default function DoughnutGraph({ allTickets }){

  const data = {
    labels: [
      '*',
      '**',
      '***',
      '****',
      '*****'
    ],
    datasets:[{
      label: 'tickets',
      data: Object.values(allTickets.reduce((accum, ticket) => {
        if(ticket.priority in accum){
          accum[ticket.priority]++;
        }
        else{
          accum[ticket.priority] = 1;
        }
        return accum;
      }, {1:0, 2:0, 3:0, 4:0, 5:0})),
      backgroundColor:[
        'green',
        'yellowgreen',
        'yellow',
        'orange',
        'red'
      ],
      hoverOffset: 4
    }]
  }
  return (
    <div>
      <h1>GRAPH</h1>
      <Doughnut data={data}/>
    </div>

  )
}