const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
  products: [{ title: String }],
  userId: String,
})

const CartModel = mongoose.model('cart', cartSchema)

module.exports = { CartModel }
