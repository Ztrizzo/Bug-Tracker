const { models: { Ticket, User, Comment }} = require('../db');


const io = require('socket.io')(3000, {
  cors:{
    origin: [`http://localhost:8080`]
  }
});

io.on('connection', socket => {
  socket.on('new-comment', async ({ticketId, creatingUser, content}) => {
    const newComment = await Comment.create({userId: creatingUser, ticketId: ticketId, content: content})
    console.log(newComment);
    io.emit('update-comments');
  })
})