const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({ 
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
    discountedPrice:{
        type:Number,
        required:true
    },
    userID:String 
})

const CartModel = mongoose.model('cart', cartSchema)

module.exports = { CartModel }
