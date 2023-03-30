const { CartModel } = require("../model/cart.model")


const cartAdd = async (req, res) => {
  const payload = req.body
  try {
    const CartProduct = new CartModel(payload)
    await CartProduct.save()
    res.status(200).send("Product has been added")
  } catch (err) {
    res.status(400).send({ "err": err.message })
  }
}

const cartGet = async (req, res) => {
  //const query=req.query
  try {
    const cartProducts = await CartModel.find()
    res.status(200).send(cartProducts)
  } catch (error) { 
    res.status(400).send({ "err": err.message })
  }
}

const DeleteCartItem=async (req,res)=>{
  const { productID } = req.params
  try {
      await CartModel.findByIdAndDelete({ _id: productID })
      res.status(200).send("Product has been Deleted")

  } catch (err) {
      res.status(400).send({ "err": err.message })
  }
}



module.exports = { cartAdd, cartGet ,DeleteCartItem}

/*
{
  "product_name": "All Red Pedal Daypack",
  "quantity": 2,
  "price": 3400,
  "image": "https://images.dailyobjects.com/marche/product-images/1201/all-red-pedal-daypack-images/All-Red-Pedal-Daypack-13t.jpg?tr=cm-pad_crop,v-2,w-202,h-249,dpr-1"
}
*/
