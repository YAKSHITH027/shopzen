// all crud with some query
const express = require('express')
const {
  ProductGet,
  ProductPost,
  SingleProductGet,
  updateProduct,
  deleteProduct,
} = require('../controller/product.controller')

const product = express.Router()

product.get('/', ProductGet)
product.get('/:id', SingleProductGet)
product.post('/add', ProductPost)
product.patch('/update/:productId', updateProduct)
product.delete('/delete/:productId', deleteProduct)
module.exports = { product }
