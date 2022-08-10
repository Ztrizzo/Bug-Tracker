import React, { useState } from "react";
import Comments from './Comments';
import { io } from 'socket.io-client';
import { useAuth0 } from "@auth0/auth0-react";

const socket = io('http://localhost:3000');
socket.on('connect', () => {
  console.log(`you connected with id: ${socket.id}`)
})

export default function CommentsContainer({ comments, ticketId, loadTicket }){
  const [commentText, setCommentText] = useState('');
  const { user } = useAuth0()



  socket.on('update-comments', (comment) => {
    //This probably doesn't work
    loadTicket();
  })


  const handleSubmit = (evt) =>{
    evt.preventDefault();
    console.log('emit');
    socket.emit('new-comment', {ticketId: ticketId, creatingUser: user.sub, content: commentText})
  }
  
  const handleChange = (evt) => {
    setCommentText(evt.target.value);
  }

  if(!comments)
    return null;
  
  return(
    <Comments 
      comments={comments} 
      commentText={commentText} 
      handleChange={handleChange} 
      handleSubmit={handleSubmit}/>
  )
}