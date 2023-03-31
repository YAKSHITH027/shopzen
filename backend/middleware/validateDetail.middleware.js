const validateDetails = (req, res, next) => {
  const { email, password, userName } = req.body
  if (!email || !password || !userName) {
    return res.status(400).send({ msg: 'incomplete details' })
  }
  req.body = {
    ...req.body,
    avatar: '',
    mobileNumber: null,
    firstName: '',
    lastName: '',
    age: null,
    createdAt: Date.now(),
  }
  next()
}
module.exports = { validateDetails }
