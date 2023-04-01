const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  title: String,
  image: String,
  price: Number,
  ogprice: Number,
  is_new: String
})

const ProductModel = mongoose.model("product", productSchema)

module.exports = { ProductModel }
