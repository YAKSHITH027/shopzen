// all crud with some query
const express = require("express")
const { ProductGet, ProductPost } = require("../controller/product.controller")

const product=express.Router()

product.get("/",ProductGet)
product.post("/add",ProductPost)

module.exports={product}