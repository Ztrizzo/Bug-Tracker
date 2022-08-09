import React, { useState } from "react";
import Comments from './Comments';

export default function CommentsContainer({ comments }){
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (evt) =>{
    evt.preventDefault();

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