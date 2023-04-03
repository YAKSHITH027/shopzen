const { OrderModel } = require('../model/order.model')

const orderAdd = async (req, res) => {
  const payload = req.body
  payload.createdAt = Date.now()
  payload.orderStatus = 'pending'
  console.log(payload)
  try {
    const singleOrder = new OrderModel(payload)
    await singleOrder.save()
    res.status(200).send({ msg: 'order has been added' })
  } catch (err) {
    res.status(400).send({ err: err.message })
  }
}
const getAllOrders = async (req, res) => {
  let { page, limit } = req.query
  if (page < 1) {
    page = 1
  }
  if (!limit) {
    limit = 10
  }
  try {
    let allOrders = await OrderModel.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
    const totalProducts = await OrderModel.countDocuments()
    res.status(200).send({ allOrders, totalProducts })
  } catch (error) {
    res.status(400).send({ msg: err.message })
  }
}
const getUserOrder = async (req, res) => {
  try {
    console.log(req.body)
    let allOrders = await OrderModel.find({ userId: req.body.userId })
    res.status(200).send(allOrders)
  } catch (error) {
    res.status(400).send({ msg: err.message })
  }
}
const updateUserOrder = async (req, res) => {
  let productId = req.params.productId
  let payload = { orderStatus: 'delivered' }
  try {
    await OrderModel.findByIdAndUpdate({ _id: productId }, payload)
    res.status(200).send({ msg: 'data updated' })
  } catch (error) {
    res.status(400).send({ msg: err.message })
  }
}

module.exports = { orderAdd, getAllOrders, getUserOrder, updateUserOrder }
