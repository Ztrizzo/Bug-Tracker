const Sequelize = require('sequelize');
const db = require('../db');


const Ticket = db.define('ticket', {
  title:{
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  createdBy: {
    type: Sequelize.STRING
  }

})

module.exports = Ticket;