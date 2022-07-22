const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  role:{
    type: Sequelize.ENUM('developer', 'manager', 'employee'),
    defaultValue: 'employee'
  },
  name: {
    type: Sequelize.STRING
  }
})

//Returns user if it already exists, otherwise returns a new user
User.findOrCreate = async ({sub, name}) =>{
  const user = (await User.findByPk(sub))?.dataValues;
  return user ? user : (await User.create({id: sub, name: name})).dataValues;
}

module.exports = User

