import React, { useEffect, useState } from "react";
import AllTickets from "./AllTickets";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AllTicketsContainer(){
  const [allTickets, setAllTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/tickets')
    .then(
      (res) => setAllTickets(res.data)
    )
  }, [])

  const handleOnCellClick = ({ id }) =>{
    navigate(`/tickets/${id}`);
  }
  
  return(
    <AllTickets allTickets={allTickets} handleOnCellClick={handleOnCellClick}/>
  )
}