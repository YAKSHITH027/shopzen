// all crud with some query
const express = require('express')
const {
  ProductGet,
  ProductPost,
  SingleProductGet,
  updateProduct,
  deleteProduct,
} = require('../controller/product.controller')
const { auth } = require('../middleware/auth.middleware')

const product = express.Router()
product.get('/', ProductGet)
product.get('/:id', SingleProductGet)
product.post('/add', auth, ProductPost)
product.patch('/update/:productId', auth, updateProduct)
product.delete('/delete/:productId', auth, deleteProduct)
module.exports = { product }
