'use strict'

const {db, models: {User, Ticket, Comment} } = require('../server/db')
const faker = require('faker');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  //Creating users
  const users = [];
  for(let i = 0; i < 5; i++){
    users.push(await User.create({id: faker.name.firstName(), name: faker.name.firstName(), role:'developer'}))
  }

  //generates a random date between the start time and end time.
  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  

  //Creating tickets
  const tickets = [];
  for(let i = 0; i < 50; i++){
    tickets.push(
      await Ticket.create({
        title: faker.lorem.lines(1), 
        description: faker.lorem.paragraph(), 
        createdBy: users[Math.floor(Math.random() * users.length)].id,
        userId: users[Math.floor(Math.random() * users.length)].id,
        priority: Math.ceil(Math.random() * 5),
        createdAt: randomDate(new Date(2022, 4), new Date())
      }))

  }

  //Creating comments
  const comments = [];
  for(let i = 0; i < 30; i++){
    comments.push(await Comment.create({content: faker.lorem.paragraph()}))
  }

}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
