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
  },
  priority: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }

})

module.exports = Ticket;