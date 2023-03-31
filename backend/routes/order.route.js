const express = require('express')
const {
  orderAdd,
  getAllOrders,
  getUserOrder,
} = require('../controller/order.controller')
const { auth } = require('../middleware/auth.middleware')

const orderRouter = express.Router()

orderRouter.post('/add', auth, orderAdd)
orderRouter.get('/', getAllOrders)
orderRouter.get('/userorder', auth, getUserOrder)

module.exports = { orderRouter }

// get
// get/id
// add
