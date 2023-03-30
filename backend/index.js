const express = require('express')
const cors = require('cors')
const { connection } = require('./db')
const { user } = require('./routes/user.route')
const { cartRouter } = require('./routes/cart.route')
//secret code = 'shop6'
const app = express()

//middlewares
app.use(express.json())
app.use(cors)

//routes
app.use('/user', user)
app.use('/cart', cartRouter)

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
