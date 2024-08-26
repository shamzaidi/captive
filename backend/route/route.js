const router = require('express').Router()
const controllers = require('../controller/serviceapi')
const Bookingcontroller = require('../controller/booking')
const Querycontroller = require('../controller/query')

router.post('/service/create',  controllers.Services)
router.post('/booking/create',  Bookingcontroller.Booking)
router.post('/query',  Querycontroller.Query)
// router.post('/orders/update/:id', controllers.updateOrder)
// router.get('/orders/search/:id', controllers.getOrderById)
// router.get('/order/list', controllers.orderlist)
// router.delete('/orders/delete/:id', controllers.removeOrder)

module.exports= router