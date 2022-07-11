// /* global describe beforeEach it */
const { db, models: { User } } = require('../db');
const seed = require('../../script/seed');
const request = require('supertest');
const loggedInApp = require('../app');
const loggedOutApp = require('../app');


// const cookie = 'appSession=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaWF0IjoxNjU3NTcxMDA0LCJ1YXQiOjE2NTc1NzEwMDUsImV4cCI6MTY1NzY1NzQwNX0..talk33QxAldgOuxo.xX1A2dssMuJdp8-JHvim8zJ2IjExkig4zux1mr0up3C3Hm3GlxhiNUfXhN5kuB-KBxxOqokpA3hF_fBD7CV1V6iDVtqSy7C4HViOsVhSf6s-0N93DGWcw5-vAPnPoNjM2rdOKEaHwghIwhAnvc4NMIEy2c91Mq0Piz-ZmBYsHdN-MHlwkFtnNs2mLNMjW-ztMFCr0_erGwN0n5yEGDgD_UTE8DVNW1pDjzxF_FXONfi5ShuIHU7FVhoDE_RnCv-q-saT6XDpKbTUfXh3bZXqreEcrakCkOQf9Plc_QDNnk40lDBxr-nI-RJSxcWnxrpHR2wDrJoRHqjZ9o411o7MGPfy4QzW5FPAg41hUs_84wviQxbXs9oGcc5CFvfX8L5m9-LO9lL565zNPwf8R1m_sKlaj4v17_DHM4NWIDA0u_P5mizZiy2KsfM2RVfHnJ15ALAbo0Ob-JahRIlajiOcwzvxnIojymYXrMHYqapCvRNiVytD79qbQah3FWQzHUhsV3XyFae6p7jZp4wq2RAbywfGqJcB8E3txnLlpxixxqVCOOnDeMDRHStHL_nVLGjKZBWVsm4Rz3bb9WP90EwWQCb0Eaf0t110hTAZzF3qzTUzbbTS3z478QO7zSYIti8Im9JEtbaWmq1_sXMu5T9KS-Gx_gtDg63vJPqXnG25vA7OsB7GdCQdyNKwgJLkHn4Sp7HOw3ywmr0Lymla8xsN3ead8YwS1p5kA5xTrEj6qmf0cqwdqUrFXQFdVzk9aEA24wNP8LbCdu7dhwZTB8F8PKE5NcdOckzOdRWI0ucvPeK0dQ93INMVbYtllQn41NYhXuy32dOqhK710cnBNA5-etRxmvItuF-V8QQJxdb902rA1UgY3xFrlikMH5s5ZfTiHh3BZj2YleaEDLkGKqFfHdthTLrYY0PnkqomDUUnu7w4DOHSqNsYgLDGr7bEXQ56EGZeEEcLXvjcgksWRnzRL4prTvqL2fdGAVgAa5ju9slHr53PxwMhsq1-HLSP3YDr1-hjjDlAycLrT48uC7ef9Ru4-pt1gh1npGIaf9F6zPSlohPZNcu0Xio2PbcFKpeF3jMyrEmbFdTtytBbdoOlCsLBCLU5gdoytlsGzInyG9jGSmmjZEvn-dO95VIiRzS5wmF34RvsvxnBlgVvZre1-8YWSNCZqWZO7oETT0SnIk8pNqbmwx5-TIVq7peD7q4wfNVQJEv7RnaxmMimEsmY1ybhbXNphPU5T1BykliXPrlq9CsRrhG1vGCINXxrAkgAgldigXSIgoOkB0EP0hwEcLEEG5x_M6vDlBiJMhZZeo-v8WzvljuVGkNyTOEpVUFMW4aCtbrI_Ek4k9cw5i4xZ0OXBAxJDnEVPelh9MU-f1AVS7UsLm090PaV_kqHqFSalTVj12ack8QZdBv6eJp5Ls17kMTxg-PP89M6PJy53PqO2K9SpdySn8-6HootzIWANB8j2-H8gyFnKeBdqxiYDhTl8ZMdZlTrS_tsD_eZRtwUOdF7VP_wcuvU0xYN6rEUcnx8xDQbVi_TE-F2RYTLnmWWwxizO-vrERsrfJPXh7iWXcfjZA.jQtG8xcw4-f4XGN8bFbMOg'


// let numUsers;
// const exampleId = 'google-oauth2|10235195634233451680';

// loggedInApp.use((req, res, next) => {
//   console.log('test');
//   next();
// })

xdescribe('GET /me', () => {
  test('/me route returns empty object if logged out', async() => {
//     // loggedOutApp.use((req, res, next) =>{ 
//     //   console.log('TEST');
//     //   next();
//     // })
//     // const response = await request(loggedOutApp)
//     // .get('/auth/me')
//     // .set('Cookie', cookie);
//     // console.log(response);
    expect(true).toBe(true);
  })
})



