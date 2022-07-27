const router = require('express').Router()
module.exports = router

router.use('/tickets', require('./tickets'));
router.use('/users', require('./users'));
router.use('/myTickets', require('./myTickets'));
router.use('/developers', require('./developers'));

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
