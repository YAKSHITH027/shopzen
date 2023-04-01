const mongoose = require('mongoose')

const wishlistSchema = mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  quantity: Number,

  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  discountedPrice: {
    type: Number,
    required: true,
  },
  userId: String,
})

const WishlistModel = mongoose.model('wishlist', wishlistSchema)

module.exports = { WishlistModel }
