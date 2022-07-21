const {expressjwt} = require('express-jwt');
const jwks = require('jwks-rsa');


const jwtCheck = expressjwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-hl39tc9t.us.auth0.com/.well-known/jwks.json'
}),
audience: 'http://localhost:8080/api',
issuer: 'https://dev-hl39tc9t.us.auth0.com/',
algorithms: ['RS256']
});

module.exports = jwtCheck;