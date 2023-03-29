const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  userName: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: String,
  mobileNumber: Number,
  firstName: String,
  lastName: String,
  age: Number,
  createdAt: String,
})

const UserModel = mongoose.model('user', userSchema)

module.exports = { UserModel }
