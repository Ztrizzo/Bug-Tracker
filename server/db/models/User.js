const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  sub: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  role:{
    type: Sequelize.ENUM('developer', 'manager', 'employee'),
    defaultValue: 'employee'
  }
})

//Returns user if it already exists, otherwise returns a new user
User.findOrCreate = async (sub) =>{

  const user = await User.findByPk(sub);
  return user ? user : await User.create({sub})
}

module.exports = User

