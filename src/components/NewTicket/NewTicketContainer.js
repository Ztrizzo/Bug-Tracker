import React, { useState } from "react";
import NewTicket from "./NewTicket";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export default function NewTicketContainer(){
  const { user } = useAuth0();
  const [formInfo, setFormInfo] = useState({
    title: '',
    description: '',
    priority: 1
  });
  const navigate = useNavigate();

  const handleChange = (evt) => {
    setFormInfo(
      {...formInfo, [evt.target.name]: evt.target.value}
    )
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const newTicket = await axios.post('/api/tickets', {formInfo: formInfo, createdById: user.sub});
    navigate(`/tickets/${newTicket.data.id}`)
  }

  return(
    <NewTicket handleChange={handleChange} formInfo={formInfo} handleSubmit={handleSubmit}/>
  )
}