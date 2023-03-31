const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const { UserModel } = require('../model/user.model')

const register = async (req, res) => {
  try {
    let user = req.body

    //checking whether user already exists or not
    let existUser = await UserModel.find({ email: user.email })
    if (existUser.length) {
      return res.status(200).send({ msg: 'User already exist, please login' })
    }

    //hashing the password
    bcrypt.hash(user.password, 3, async (err, hash) => {
      user.password = hash
      let userRegister = new UserModel(user)
      await userRegister.save()
      res.status(201).send({ msg: 'user has been registerd' })
    })
  } catch (error) {
    res.status(400).send({ msg: error.message })
  }
}
const login = async (req, res) => {
  try {
    let credentials = req.body

    //taking userInfo from DB
    let userInDb = await UserModel.findOne({ email: credentials.email })

    //checking whether user exist on db
    if (!userInDb) {
      return res.status(400).send({ msg: 'user not found' })
    }

    //comparing the hashed password and recieved password
    bcrypt.compare(
      credentials.password,
      userInDb.password,
      function (err, result) {
        if (result) {
          //creating the token
          let token = jwt.sign({ userId: userInDb._id }, 'shop6')
          console.log(token)
          res.status(200).send({ msg: 'login successful', token: token })
        } else {
          res.status(400).send({ msg: 'login failed' })
        }
      }
    )
  } catch (error) {
    res.status(400).send({ msg: error.message })
  }
}

const getUsers = async (req, res) => {
  const { page, limit } = req.query
  try {
    let users = await UserModel.find()
      .skip((page - 1 || 0) * limit)
      .limit(limit || 10)
    res.status(200).send(users)
  } catch (error) {
    res.status(400).send({ msg: error.message })
  }
}

module.exports = { register, login, getUsers }
