const express = require("express");
const { placeOrder } = require("../controllers/orderController");
const Order = require("../model/Order.js");
const router = express.Router();

// router.post("/order", placeOrder);

// router.get("/MyOrders/:userId",async(req, res)=>{
//     try{
//         const orders = await Order.find({userId: req.params.userId}).populate("productId"); //this 
//         res.json(orders);
//     }catch(error){
//         console.log(error);
//         res.status(500).json({message:"Error fetchiing orders"});
//     }
// });
// const Order = require("../models/Order");
router.post("create-order",async (req,res)=>{

  try{
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({
      success:"true",
      order
    });
  }catch(err){
    res.status(500).json({
      message:err.message
    });
  }
})

module.exports = router;


// router.get("/my-orders/:userId", async (req, res) => {
//   const orders = await Order.find({ userId: req.params.userId });
//   res.json(orders);
// });