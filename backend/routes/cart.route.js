const express = require('express')
const { cartAdd, cartGet } = require('../controller/cart.controller')

const cart = express.Router()

cart.post('/add', cartAdd)
cart.post('/', cartGet)

module.exports = { cart }

// /add
// /
// /update   --- you can send the whole array itself in that case no need to delete rather keep updating
