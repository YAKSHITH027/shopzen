const mongoose = require('mongoose')

const wishlistSchema = mongoose.Schema({
    product_name: {
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
     type:String,
     required:true
    },
    userID:String
})

const WishlistModel = mongoose.model('wishlist', wishlistSchema)

module.exports = { WishlistModel }
