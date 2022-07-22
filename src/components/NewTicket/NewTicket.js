import React from "react";

export default function NewTicket({ handleChange, formInfo, handleSubmit }){
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <h1>NEW TICKET</h1>
        <div>Title<input name="title" value={formInfo.title} onChange={handleChange}/></div>
        <div>Description<input name="description" value={formInfo.description} onChange={handleChange}/></div>
        <button>Submit</button>
      </form>
    </div>
  )
}