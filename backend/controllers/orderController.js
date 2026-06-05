// import Order from "../models/Order.js";

const Order = require("../model/Order.js");
//I create function for plced order and access product id and address or userId and save this new model in database

const placeOrder = async (req, res) => {
  try {
    // console.log("BODY:", req.body); 
    const { productId,userId, address } = req.body;

    if (!productId || !address) {
      console.log(" Missing data");
      return res.status(400).json({ message: "Missing fields" });
    }

    const order = new Order({
      productId,
      address,
      userId
    });
    // console.log(order);
    await order.save();

    res.status(200).json({ message: "Order placed successfully" });

  } catch (error) {
    // console.log(" REAL ERROR:", error); 
    res.status(500).json({ error: error.message });
  }
};
module.exports = {placeOrder};