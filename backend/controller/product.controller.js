const { ProductModel } = require("../model/product.model")

const ProductGet = async (req, res) => {
  const skipamount=(req.query.page-1)*req.query.limit
    try {
      const products= await ProductModel.find({"title":{$regex:".*"+req.query.search+".*",$options:"i"}}).skip(skipamount).limit(req.query.limit)
      
      res.status(200).send(products)
    } catch (error) {
        res.status(400).send({"msg":error})
    }
  }

const SingleProductGet = async (req,res)=>{
  const {id}=req.params
  try {
    const product= await ProductModel.findOne({_id:id})
    res.status(200).send(product)
  }catch(err){
    res.status(400).send({"msg":err})
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
module.exports={ProductGet, ProductPost, SingleProductGet}