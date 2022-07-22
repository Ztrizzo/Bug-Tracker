const router = require('express').Router();
const { models: {User }} = require('../db');
const jwtCheck = require('../jwtCheck')
module.exports = router;


router.get('/me', jwtCheck, async (req, res, next) => {
  try {
    await User.findOrCreate({ sub: req.auth.sub, name: req.query.name });
    res.status(200).send();
  } catch (ex) {
    next(ex)
  }
})

