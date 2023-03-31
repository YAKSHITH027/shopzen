const { ProductModel } = require("../model/product.model")

const ProductGet = async (req, res) => {
    try {
      const products= await ProductModel.find()
      console.log(products)
      res.status(200).send(products)
    } catch (error) {
        res.status(400).send({"msg":error})
    }
  }

  const ProductPost = async (req,res)=>{
    try{
        const products=new ProductModel(req.body)
        await products.save()
        console.log(products)
        res.status(200).send({"msg":"A new Product has been added"})
    }catch(err){
        res.status(400).send({"msg":err.message}) 
    }
  }
module.exports={ProductGet, ProductPost}