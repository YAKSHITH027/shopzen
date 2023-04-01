const express = require('express')
const cors = require('cors')
const { connection } = require('./db')
const { user } = require('./routes/user.route')
const { cartRouter } = require('./routes/cart.route')
const { wishListRouter } = require('./routes/wishlist.route')
const { auth } = require('./middleware/auth.middleware')
const { product } = require('./routes/product.route')
const { orderRouter } = require('./routes/order.route')
const { admin } = require('./routes/admin.route')
require('dotenv').config()

const app = express()

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.get('/', (req, res) => {
  console.log(req.body)
  res.send('home')
})
app.use('/user', user)
app.use('/admin', admin)
app.use('/order', orderRouter)
app.use('/product', product)
app.use(auth)
app.use('/cart', cartRouter)
app.use('/wishlist', wishListRouter)

// listening to port
app.listen(process.env.port, async () => {
  try {
    await connection
    console.log('db is connected')
  } catch (error) {
    console.log('db connection failed')
  }
  console.log(`port is running on port ${process.env.port}`)
})
