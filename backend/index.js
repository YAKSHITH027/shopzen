const express = require('express')
const cors = require('cors')
const { connection } = require('./db')
const { user } = require('./routes/user.route')
const { cartRouter } = require('./routes/cart.route')
const { wishListRouter } = require('./routes/wishlist.route')
const { auth } = require('./middleware/auth.middleware')
const { product } = require('./routes/product.route')
const { orderRouter } = require('./routes/order.route')
// secret code = 'shop6'
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
app.use('/order', orderRouter)
app.use(auth)
app.use('/cart', cartRouter)
app.use('/wishlist', wishListRouter)
app.use('/product', product)

// listening to port
app.listen(7000, async () => {
  try {
    await connection
    console.log('db is connected')
  } catch (error) {
    console.log('db connection failed')
  }
  console.log(`port is running on port 7000`)
})
