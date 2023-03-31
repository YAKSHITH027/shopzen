const validateLogin = (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).send({ msg: 'incomplete details' })
  }
  next()
}
module.exports = { validateLogin }
