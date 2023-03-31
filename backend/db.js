const mongoose = require('mongoose')

const connection = mongoose.connect(
  `mongodb+srv://devang:devang@cluster0.ug8b0x8.mongodb.net/projectdata?retryWrites=true&w=majority`
)

module.exports = { connection }
