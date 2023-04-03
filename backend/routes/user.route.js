const express = require('express')
const {
  register,
  login,
  getUsers,
  getOneUser,
  updateUser,
} = require('../controller/user.controller')
const { validateDetails } = require('../middleware/validateDetail.middleware')
const { validateLogin } = require('../middleware/login.middleware')
const { auth } = require('../middleware/auth.middleware')
const user = express.Router()

user.post('/register', validateDetails, register)
user.post('/login', validateLogin, login)
user.get('/', getUsers)
user.get('/getone', auth, getOneUser)
user.patch('/update', auth, updateUser)

module.exports = { user }

// authonticaion
// get all
// patch/id
