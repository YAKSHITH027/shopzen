const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
  products: [
    {
      title: String,
    },
  ],
  userId: String,
  createdAt: String,
  address: {
    fullname: String,
    mobile: Number,
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
