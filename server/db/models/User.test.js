/* global describe beforeEach it */
const { db, models: { User } } = require('../index')
const seed = require('../../../script/seed');

let numUsers;
const exampleId = 'google-oauth2|102351959334608151680';

// let users;
beforeEach(async() => {
  await seed();
  numUsers = (await User.findAll()).length;

})

describe('User', () => {
  test('findOrCreate creates a user if the id doesnt exist', async () => {
    const user = await User.findOrCreate(exampleId);
    const newUserCount = (await User.findAll()).length;
    expect(typeof user).toBe('object');
    expect(newUserCount).toBe(numUsers + 1);
    numUsers++;
  });
  
    
  
  test('findOrCreate returns the user object if it already exists', async () => {
    const user = await User.findOrCreate(exampleId);
    expect(typeof user).toBe('object');
    expect(user.sub).toBe(exampleId);
  });
  
})




// describe('User model', () => {
//   let users;
//   beforeEach(async() => {
//     users = (await seed()).users;
//   })

//   describe('instanceMethods', () => {
//     describe('generateToken', () => {
//       it('returns a token with the id of the user', async() => {
//         const token = await users.cody.generateToken();
//         const { id } = await jwt.verify(token, process.env.JWT);
//         expect(id).to.equal(users.cody.id);
//       })
//     }) // end describe('correctPassword')
//     describe('authenticate', () => {
//       let user;
//       beforeEach(async()=> user = await User.create({
//         username: 'lucy',
//         password: 'loo'
//       }));
//       describe('with correct credentials', ()=> {
//         it('returns a token', async() => {
//           const token = await User.authenticate({
//             username: 'lucy',
//             password: 'loo'
//           });
//           expect(token).to.be.ok;
//         })
//       });
//       describe('with incorrect credentials', ()=> {
//         it('throws a 401', async() => {

//           try {
//             await User.authenticate({
//               username: 'lucy@gmail.com',
//               password: '123'
//             });
//             throw 'nooo';
//           }
//           catch(ex){
//             expect(ex.status).to.equal(401);
//           }
//         })

//       });
//     }) // end describe('authenticate')
//   }) // end describe('instanceMethods')
// }) // end describe('User model')
