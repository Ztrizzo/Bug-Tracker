const router = require('express').Router();
module.exports = router;
const { models: { Ticket, User }} = require('../db');
const jwtCheck = require('../jwtCheck')

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
    await Ticket.create({
      title: req.body.formInfo.title,
      description: req.body.formInfo.description,
      createdBy: req.body.createdById,
      priority: req.body.formInfo.priority
    })

    res.status(201).send();
  }
  catch(error){
    next(error);
  }
})

router.put('/assign', jwtCheck, async (req, res ,next) => {
  try{
    const ticket = await Ticket.findByPk(req.body.ticketId);
    ticket.userId = req.body.userId;
    await ticket.save();
    res.status(204).send();
  }
  catch(error){
    next(error);
  }
})

