import ProductModel from "../models/Product.js";
import OrderModel from "../models/Order.js" 

const addOrder = async (req, res) => 
{
 try
 {
  const {productId, quantity, total}= req.body;
  const userId= req.user._id;
  const product = await ProductModel.findById({_id:productId})
  
  if(!product)
  {
    return res.status(404).json({error: "Product not found in order"})

  }
  if(quantity > product.stock)
  {
    return res.status(404).json({error: "Not enough stock"})
  }
  else
  {
    product.stock -= parseInt(quantity);
    await product.save();
  }
  const orderObj = new OrderModel({
   
    customer: userId,
    product: productId,
    quantity,
    totalPrice: total
  })

  await orderObj.save();
  return res.status(200).json({success: true, message: "Order added successfully"})
 }
 catch (error)
 {
     return res.status(402).json({success: false, message: "Order not added."})
 } 
}

export {addOrder}