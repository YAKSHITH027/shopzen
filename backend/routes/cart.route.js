const express = require('express')
const {
  cartAdd,
  cartGet,
  DeleteCartItem,
  HandleQuantityIncrease,
  HandleQuantityDecrease,
  deleteAllCart,
} = require('../controller/cart.controller')

const cartRouter = express.Router()

cartRouter.post('/add', cartAdd)
cartRouter.delete('/delete', deleteAllCart)
cartRouter.get('/getitem', cartGet)
cartRouter.delete('/:productID', DeleteCartItem)
cartRouter.patch('/increament/:productID', HandleQuantityIncrease)
cartRouter.patch('/decreament/:productID', HandleQuantityDecrease)

module.exports = { cartRouter }

// /add
// /
// /update   --- you can send the whole array itself in that case no need to delete rather keep updating
