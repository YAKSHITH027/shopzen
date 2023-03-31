const express = require('express')
const cors = require('cors')
const { connection } = require('./db')
const { user } = require('./routes/user.route')
const { cart } = require('./routes/cart.route')
const {product } = require('./routes/product.route')
//secret code = 'shop6'
const app = express()

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/user', user)
app.use('/cart', cart)
app.use('/product',product)


// listening to port
app.listen(8080, async () => {
  try {
    await connection
    console.log('db is connected')
  } catch (error) {
    console.log('db connection failed')
  }
  console.log(`port is running on port 8080`)
})
