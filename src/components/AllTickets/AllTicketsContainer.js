import React, { useEffect, useState } from "react";
import AllTickets from "./AllTickets";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AllTicketsContainer(){
  const [allTickets, setAllTickets] = useState([]);


  useEffect(() => {
    axios.get('/api/tickets')
    .then(
      (res) => setAllTickets(res.data)
    )
  }, [])

  
  return(
    <AllTickets allTickets={allTickets}/>
  )
}