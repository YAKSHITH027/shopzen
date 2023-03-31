// all crud with some query
const express = require("express")
const { ProductGet, ProductPost, SingleProductGet } = require("../controller/product.controller")

const product=express.Router()

product.get("/",ProductGet)
product.get("/:id",SingleProductGet)
product.post("/add",ProductPost)
module.exports={product}