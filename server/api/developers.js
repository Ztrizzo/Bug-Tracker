const router = require('express').Router();
module.exports = router;
const { models: { Ticket, User }} = require('../db');
const jwtCheck = require('../jwtCheck');
const axios = require('axios');
const getManagementAPIToken = require('../getManagementAPIToken');

router.get('/', async (req, res, next) =>{
  try{
    const token = await getManagementAPIToken();
    const options = { 
      method: "GET",
      url: "https://dev-hl39tc9t.us.auth0.com/api/v2/users",
      headers: { "authorization": `Bearer ${token}` },
    };

    axios(options)
    .then(async response => {
      const  users = response.data;
      let developers = [];
      for(let user of users){
        const roles = (await axios({...options, url: `https://dev-hl39tc9t.us.auth0.com/api/v2/users/${user.user_id}/roles`})).data;
        console.log(roles);
        if(roles.find(role => role.name === 'Developer')){
          developers.push(user);
        }
      }
      res.status(200).send(developers);
    })
    
  }
  catch(error){
    next(error);
  }
})


