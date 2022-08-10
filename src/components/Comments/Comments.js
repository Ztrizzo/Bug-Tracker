import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { TextareaAutosize } from "@mui/material";

export default function Comments({ comments, handleChange, handleSubmit, commentText }){
  return(
    <div style={{padding: '5em', border: '1px solid black'}}>
      <Typography variant="h5">Chat</Typography>
        {comments.map(comment => {
          return <div key={comment.id} sx={{margin: '2em 0em 2em 0'}}>
            <Box sx={{margin: '1em 0 .5em 0', display: 'flex', justifyContent:'space-between'}}>
              <Typography variant="caption">{comment.user.name} says:</Typography>
              <Typography variant="caption">Posted on {new Date(comment.createdAt).toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric"}) }</Typography>
            </Box>
            {comment.content}
            
          </div>
        })}
      <form 
        style={{display:'flex', flexDirection:'column', marginTop: '5em'}}
        onSubmit={handleSubmit}
        >
        {/*shouldn't show this if not logged in  */}
        <Typography variant="h6">New Comment</Typography>
        <TextareaAutosize
          value={commentText}
          onChange={handleChange}
          aria-label="minimum height"
          minRows={5}
          placeholder="New Comment"
          style={{ width: '100%' }}
        />
        <Button type="submit">Submit</Button>
      </form>
        
    </div>
  )
}