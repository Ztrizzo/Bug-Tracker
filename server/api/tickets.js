const router = require('express').Router();
module.exports = router;
const { models: { Ticket, User }} = require('../db');

router.get('/', async(req, res, next) => {
  try{
    res.send(await Ticket.findAll());
  }
  catch(error){
    next(error);
  }
})

router.get('/:id', async (req, res, next) => {
  try{

    const ticket = (await Ticket.findByPk(req.params.id)).dataValues;
    const user = await User.findByPk(ticket.createdBy);
    res.send({...ticket, createdBy: user.name});
  }
  catch(error){
    next(error);
  }
})

router.post('/', async (req, res, next) =>{
  try{
    console.log(req.body);
    await Ticket.create({
      title: req.body.formInfo.title,
      description: req.body.formInfo.description,
      createdBy: req.body.createdById
    })

    res.status(201).send();
  }
  catch(error){
    next(error);
  }
})