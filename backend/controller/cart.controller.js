const { CartModel } = require('../model/cart.model')

const cartAdd = async (req, res) => {
  const payload = req.body
  console.log(payload)
  try {
    const CartProduct = new CartModel(payload)
    await CartProduct.save()
    res.status(200).send({ msg: 'Product has been added' })
  } catch (err) {
    res.status(400).send({ err: err.message })
  }
}

const cartGet = async (req, res) => {
  //const query=req.query
  // console.log('cartbody', req.body)
  try {
    const cartProducts = await CartModel.find({ userId: req.body.userId })
    res.status(200).send(cartProducts)
  } catch (err) {
    res.status(400).send({ msg: err.message })
  }
}

const DeleteCartItem = async (req, res) => {
  const { productID } = req.params
  try {
    await CartModel.findByIdAndDelete({
      _id: productID,
      userId: req.body.userId,
    })
    res.status(200).send({ msg: 'Product has been Deleted' })
  } catch (err) {
    res.status(400).send({ err: err.message })
  }
}

const HandleQuantityIncrease = async (req, res) => {
  const { productID } = req.params
  const payload = req.body
  payload.quantity = payload.quantity
  try {
    await CartModel.findByIdAndUpdate(
      { _id: productID, userId: req.body.userId },
      payload
    )
    res.status(200).send({ msg: 'Product has been Updated' })
  } catch (err) {
    res.status(400).send({ err: err.message })
  }
}

const HandleQuantityDecrease = async (req, res) => {
  const { productID } = req.params
  const payload = req.body
  payload.quantity = payload.quantity
  console.log(payload)
  try {
    await CartModel.findByIdAndUpdate(
      { _id: productID, userId: req.body.userId },
      payload
    )
    res.status(200).send({ msg: 'Product has been Updated' })
  } catch (err) {
    res.status(400).send({ err: err.message })
  }
}

const deleteAllCart = async (req, res) => {
  try {
    console.log('req', req.body.userId)
    if (!req.body.userId) {
      return
    }
    await CartModel.deleteMany({ userId: req.body.userId })
    res.status(200).send({ msg: 'Cart has been Deleted' })
  } catch (error) {
    res.status(400).send({ err: error.message })
  }
}

module.exports = {
  cartAdd,
  cartGet,
  DeleteCartItem,
  HandleQuantityIncrease,
  HandleQuantityDecrease,
  deleteAllCart,
}

/*
{
  "product_name": "All Red Pedal Daypack",
  "quantity": 2,
  "price": 3400,
  "image": "https://images.dailyobjects.com/marche/product-images/1201/all-red-pedal-daypack-images/All-Red-Pedal-Daypack-13t.jpg?tr=cm-pad_crop,v-2,w-202,h-249,dpr-1"
}
*/
