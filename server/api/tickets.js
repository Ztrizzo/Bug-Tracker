const router = require('express').Router();
module.exports = router;
const { models: { Ticket }} = require('../db');

router.get('/', async(req, res, next) => {
  try{
    res.send(await Ticket.findAll());
  }
  catch(error){
    next(error);
  }
})