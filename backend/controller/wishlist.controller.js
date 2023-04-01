const { WishlistModel } = require('../model/wishlist.model')

const wishListAdd = async (req, res) => {
  const payload = req.body
  try {
    const wishlistProduct = new WishlistModel(payload)
    await wishlistProduct.save()
    res.status(200).send('Product has been added in wishlist')
  } catch (err) {
    res.status(400).send({ err: err.message })
  }
}

const wishListGet = async (req, res) => {
  try {
    const wishlistProduct = await WishlistModel.find({
      userId: req.body.userId,
    })
    res.status(200).send(wishlistProduct)
  } catch (error) {
    res.status(400).send({ err: err.message })
  }
}

const deleteWishlistItem = async (req, res) => {
  const { productID } = req.params
  try {
    await WishlistModel.findByIdAndDelete({
      _id: productID,
      userId: req.body.userId,
    })
    res.status(200).send('Product has been Removed from Wishlist')
  } catch (err) {
    res.status(400).send({ err: err.message })
  }
}

module.exports = { wishListAdd, wishListGet, deleteWishlistItem }
