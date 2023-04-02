const express = require('express')
const { register, login } = require('../controller/admin.controller')

const admin = express.Router()

admin.post('/register', register)
admin.post('/login', login)

module.exports = { admin }
