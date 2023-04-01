const { ProductModel } = require('../model/product.model')

const ProductGet = async (req, res) => {
  let { page, limit } = req.query
  if (page < 1) {
    page = 1
  }
  if (!limit) {
    limit = 10
  }
  try {
    const products = await ProductModel.find()
      .skip((page - 1) * limit)
      .limit(limit)
    const totalProducts = await ProductModel.countDocuments()
    res.status(200).send({ products, totalProducts })
  } catch (error) {
    res.status(400).send({ msg: error })
  }
}

const SingleProductGet = async (req, res) => {
  const { id } = req.params
  try {
    const product = await ProductModel.findOne({ _id: id })
    res.status(200).send(product)
  } catch (err) {
    res.status(400).send({ msg: err })
  }
}

const ProductPost = async (req, res) => {
  try {
    const products = new ProductModel(req.body)
    await products.save()
    console.log(products)
    res.status(200).send({ msg: 'A new Product has been added' })
  } catch (err) {
    res.status(400).send({ msg: err.message })
  }
}
const updateProduct = async (req, res) => {
  let productId = req.params.productId
  console.log(productId, req.body)
  try {
    const products = await ProductModel.findByIdAndUpdate(
      { _id: productId },
      req.body
    )

    res.status(200).send({ msg: 'A new Product has been updated' })
  } catch (err) {
    res.status(400).send({ msg: err.message })
  }
}
const deleteProduct = async (req, res) => {
  let productId = req.params.productId
  try {
    const products = await ProductModel.findByIdAndDelete({ _id: productId })

    res.status(200).send({ msg: 'A new Product has been deleted' })
  } catch (err) {
    res.status(400).send({ msg: err.message })
  }
}
module.exports = {
  ProductGet,
  ProductPost,
  SingleProductGet,
  updateProduct,
  deleteProduct,
}
