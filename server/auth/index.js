const router = require('express').Router();
const { models: {User }} = require('../db');
module.exports = router;


router.get('/me', async (req, res, next) => {
  try {
    // console.log(req.oidc.isAuthenticated());
    if(req.oidc.isAuthenticated())
      await User.findOrCreate(req.oidc.user.sub);
    res.send(req.oidc.user || {});
    res.sendStatus(200);
  } catch (ex) {
    next(ex)
  }
})

