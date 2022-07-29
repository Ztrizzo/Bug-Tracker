import React from "react";

export default function NewTicket({ handleChange, formInfo, handleSubmit }){
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <h1>NEW TICKET</h1>
        <div>Title<input name="title" value={formInfo.title} onChange={handleChange}/></div>
        <div>Description<input name="description" value={formInfo.description} onChange={handleChange}/></div>
        <div>
          Priority
          <select name='priority' value={formInfo.priority} onChange={handleChange}>
            <option value={1}>*</option>
            <option value={2}>**</option>
            <option value={3}>***</option>
            <option value={4}>****</option>
            <option value={5}>*****</option>
          </select>
        </div>
        
        <button>Submit</button>
      </form>
    </div>
  )
}