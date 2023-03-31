const jwt = require('jsonwebtoken')
const auth = (req, res, next) => {
  let token = req.headers.authorization
  jwt.verify(token, 'eval', function (err, decoded) {
    if (decoded) {
      req.body.userId = decoded.userId
      next()
    } else {
      res.status(400).send({ msg: 'please login first' })
    }
  })
}

module.exports = { auth }
