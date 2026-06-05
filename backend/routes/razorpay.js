// import express from "express";

const express = require("express");
const {createOrder, verifyPayment} = require("../controllers/paymentController");
const router = express.Router();
// import { createOrder, verifyPayment } from "./paymentController.js";

router.get("/test", (req, res) => {
  res.send("API working ✅");
});
router.post("/create-order", createOrder);
router.post("/verify-payment", verifyPayment);

// export default router;
module.exports = router;