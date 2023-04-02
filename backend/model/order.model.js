const mongoose = require('mongoose')
const { cartSchema } = require('./cart.model')

const orderSchema = mongoose.Schema({
  products: [cartSchema],
  userId: String,
  createdAt: String,
  totalAmount: Number,
  createdAt: String,
  address: {
    fullname: String,
    mobile: String,
    email: String,
    address: String,
    pincode: Number,
    city: String,
    state: String,
    country: String,
  },
})

const OrderModel = mongoose.model('order', orderSchema)

module.exports = { OrderModel }
