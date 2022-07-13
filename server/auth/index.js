const router = require('express').Router();
const { models: {User }} = require('../db');
module.exports = router;


router.get('/me', async (req, res, next) => {
  try {
    let user;
    if(req.oidc.isAuthenticated())
      user = await User.findOrCreate(req.oidc.user.sub);
    res.send({...user, ...req.oidc.user} || {});
  } catch (ex) {
    next(ex)
  }
})

