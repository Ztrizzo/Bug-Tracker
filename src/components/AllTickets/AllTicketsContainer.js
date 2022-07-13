import React, { useEffect, useState } from "react";
import AllTickets from "./AllTickets";
import axios from "axios";

export default function AllTicketsContainer(){
  const [allTickets, setAllTickets] = useState([]);
  
  useEffect(() => {
    axios.get('/allTickets')
    .then(
      (res) => console.log(res)
    )
  }, [])

  return(
    <AllTickets allTickets={allTickets}/>
  )
}