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
      url: "https://dev-hl39tc9t.us.auth0.com/api/v2/roles/rol_q9CGIQ0OVjoWPOF1/users",
      headers: { "authorization": `Bearer ${token}` },
    };

    //request all users with the developer role
    axios(options)
    .then(async response => {
      res.status(200).send(response.data);
    })
    
  }
  catch(error){
    next(error);
  }
})


