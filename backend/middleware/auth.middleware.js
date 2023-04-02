const jwt = require('jsonwebtoken')
const auth = (req, res, next) => {
  let token = req.headers.authorization
  console.log('auth', token)
  jwt.verify(token, `${process.env.secret_key}`, function (err, decoded) {
    if (decoded) {
      console.log('decoded', decoded)
      req.body.userId = decoded.userId
      console.log('body', req.body)
      console.log('rountes', req.url, req.method)
      next()
    } else {
      res.status(400).send({ msg: 'please login first' })
    }
  })
}

module.exports = { auth }
