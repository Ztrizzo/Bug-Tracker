const router = require('express').Router()
const { models: { User }} = require('../db');
const jwtCheck = require('../jwtCheck');
module.exports = router;


router.get('/protected', jwtCheck, async (req, res, next) => {
  try{
    console.log(req.headers);
    res.status(200).send({message: 'THIS IS A SECRET'});
  }
  catch(error){
    next(error);
  }

})

router.get('/', async (req, res, next) => {
  try {
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
