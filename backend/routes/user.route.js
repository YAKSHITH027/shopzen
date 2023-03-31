const express = require('express')
const { register, login, getUsers } = require('../controller/user.controller')
const { validateDetails } = require('../middleware/validateDetail.middleware')
const { validateLogin } = require('../middleware/login.middleware')
const user = express.Router()

user.post('/register', validateDetails, register)
user.post('/login', validateLogin, login)
user.get('/', getUsers)

module.exports = { user }

// authonticaion
// get all
// patch/id
