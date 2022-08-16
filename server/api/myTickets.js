const router = require('express').Router();
module.exports = router;
const { models: { Ticket, User }} = require('../db');
const jwtCheck = require('../jwtCheck')



router.get('/', jwtCheck, async (req, res, next) => {
  try{
    const user = await User.findByPk(req.auth.sub);
    res.status(200).send(await user.findAllActiveTickets());
  }
  catch(error){
    next(error);
  }
})

