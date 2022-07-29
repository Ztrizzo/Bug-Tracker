import React, { useState } from "react";
import NewTicket from "./NewTicket";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export default function NewTicketContainer(){
  const { user } = useAuth0();
  const [formInfo, setFormInfo] = useState({
    title: '',
    description: '',
    priority: 1
  });

  const handleChange = (evt) => {
    setFormInfo(
      {...formInfo, [evt.target.name]: evt.target.value}
    )
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await axios.post('/api/tickets', {formInfo: formInfo, createdById: user.sub});
  }

  return(
    <NewTicket handleChange={handleChange} formInfo={formInfo} handleSubmit={handleSubmit}/>
  )
}