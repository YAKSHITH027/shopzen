const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  title: String,
})

const ProductModel = mongoose.model('product', productSchema)

module.exports = { ProductModel }
