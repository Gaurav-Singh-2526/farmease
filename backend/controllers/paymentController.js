// import Razorpay from "razorpay";
const crypto = require("crypto");
const Razorpay = require("razorpay");
// import crypto from "crypto";
const Order = require("../model/Order"); 

const razorpay = new Razorpay({
  key_id: "rzp_test_ShKS3xSgbcYLfy",
  key_secret: "9f45lMDoGw72RakKIqLsPDOP",
});

//  Create Order
const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // paisa
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);
    res.json(order);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//  Verify Payment
// const verifyPayment = (req, res) => {
//   const {
//     razorpay_order_id,
//     razorpay_payment_id,
//     razorpay_signature,
//   } = req.body;

//   const body = razorpay_order_id + "|" + razorpay_payment_id;

//   const expectedSignature = crypto
//     .createHmac("sha256", "YOUR_SECRET")
//     .update(body.toString())
//     .digest("hex");

//   if (expectedSignature === razorpay_signature) {
//     // ✅ Payment verified → Save order DB
//     res.json({ success: true, message: "Payment Verified ✅" });
//   } else {
//     res.status(400).json({ success: false });
//   }
// };

// const Order = require("../model/Order"); // path check kar lena

const verifyPayment = async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    userId,
    amount
  } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", "9f45lMDoGw72RakKIqLsPDOP") //  apna real secret
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {

    console.log(" Payment Verified");

    //  YAHAN ORDER SAVE KARO
    const newOrder = new Order({
      userId:userId,
      amount,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
    });

    await newOrder.save();
    // console.log("USER ID FROM FRONTEND:", userId);
    console.log(" Order Saved");

    res.json({ success: true });

  } else {
    res.status(400).json({ success: false });
  }
};
module.exports = { createOrder, verifyPayment };