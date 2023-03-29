const mongoose = require('mongoose')

const connection = mongoose.connect(
  `mongodb+srv://nishasharma:nishasharma@cluster0.xemlmgg.mongodb.net/shopzen?retryWrites=true&w=majority`
)

module.exports = { connection }
