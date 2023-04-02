const mongoose = require('mongoose')
require('dotenv').config()
// const connection = mongoose.connect(`${process.env.mongoURL}`)
const connection = mongoose.connect(`${process.env.mongoURL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  socketTimeoutMS: 30000, // Set the buffer time to 30 seconds
})

module.exports = { connection }
