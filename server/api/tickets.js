const router = require('express').Router();
module.exports = router;
const { models: { Ticket, User, Comment }} = require('../db');
const jwtCheck = require('../jwtCheck')

router.get('/', async(req, res, next) => {
  try{
    const tickets = await Ticket.findAll({
      where: {
        completed: false
      },
      include: {model: User, as: 'assignedTo'}
    });
    res.send(tickets);
  }
  catch(error){
    next(error);
  }
})

router.get('/completed', async (req, res, next) => {
  try{
    const completedTickets = await Ticket.findAll({
      where:{
        completed: true
      },
      include: [
        {model: User, as: 'assignedTo'},
        {model: User, as: 'completedBy'}
      ]
    });
    res.status(200).send(completedTickets);
  }
  catch(error){
    next(error);
  }
})

router.get('/:id', async (req, res, next) => {
  try{
    const ticket = (await Ticket.findOne({
      where:{ id: req.params.id },
      include: [{
        model: User,
        as: 'assignedTo'
      }, {
        model: Comment,
        include: [User]
      }, {
        model: User,
        as: 'completedBy'
      }
    
    ]
    }))?.dataValues;
    if(!ticket){
      res.status(404).send();
    }
    const user = await User.findByPk(ticket.createdBy);

    res.send({...ticket, createdBy: user.name});
  }
  catch(error){
    next(error);
  }
})



router.delete('/:id', jwtCheck, async (req, res, next) => {
  try{
    //Only managers can delete tickets
    if(!req.auth.permissions.includes('delete:tickets')){
      res.status(401).send();
      return;
    }
    const ticket = await Ticket.findByPk(req.params.id);
    await ticket.destroy();
    res.status(204).send();
  }
  catch(error){
    next(error);
  }
})

router.put('/:id/complete', jwtCheck, async (req, res, next) => {
  try{
    if(!req.auth.permissions.includes('complete:tickets')){
      res.status(401).send();
      return;
    }
    const ticket = await Ticket.findByPk(req.params.id);
    ticket.completedById = req.auth.sub;
    ticket.completed = true;
    ticket.completedOn = new Date();
    await ticket.save();

    res.status(204).send(ticket);
  }
  catch(error){
    next(error);
  }
})

router.post('/', async (req, res, next) =>{
  try{
    const ticket = await Ticket.create({
      title: req.body.formInfo.title,
      description: req.body.formInfo.description,
      createdBy: req.body.createdById,
      priority: req.body.formInfo.priority
    })

    res.status(201).send(ticket);
  }
  catch(error){
    next(error);
  }
})

router.put('/assign', jwtCheck, async (req, res ,next) => {
  try{
    const ticket = await Ticket.findByPk(req.body.ticketId);
    ticket.assignedToId = req.body.userId;
    await ticket.save();
    res.status(204).send();
  }
  catch(error){
    next(error);
  }
})

