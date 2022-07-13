import React from "react";

export default function AllTickets({ allTickets }){
  console.log(allTickets)
  return (
    <div>
      {JSON.stringify(allTickets)}
    </div>
  )
}