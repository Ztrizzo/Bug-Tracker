const request = require('request');
const axios = require('axios');
let token;



const getManagementAPIToken = async () => {
  if(token) return token;

  const response = (await axios.post('https://dev-hl39tc9t.us.auth0.com/oauth/token', {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    audience:"https://dev-hl39tc9t.us.auth0.com/api/v2/",
    grant_type:"client_credentials"
  }, {
    headers: {
      'content-type': 'application/json'
    }
  })).data;
  token = response.access_token;
  return token;

}


module.exports = getManagementAPIToken;