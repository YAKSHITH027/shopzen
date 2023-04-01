const express = require('express')
const { wishListAdd, wishListGet } = require('../controller/wishlist.controller')



const wishListRouter = express.Router()

wishListRouter.post('/add', wishListAdd)
wishListRouter.get("/getitem",wishListGet)
wishListRouter.get("/:productID",wishListGet)



module.exports = { wishListRouter }

