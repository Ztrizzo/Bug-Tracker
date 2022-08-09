//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Comment = require('./models/Comment');
const Ticket = require('./models/Ticket');

//associations
User.hasMany(Ticket);
Ticket.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Ticket.hasMany(Comment);
Comment.belongsTo(Ticket);

module.exports = {
  db,
  models: {
    User,
    Comment,
    Ticket
  },
}
