const router = require('express').Router()
const { models: { User }} = require('../db');
const authenticationMiddleware = require('../authenticationMiddleware');
module.exports = router;
router.use(authenticationMiddleware);

router.get('/', async (req, res, next) => {
  try {
    console.log(req.headers.authorization);


    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
