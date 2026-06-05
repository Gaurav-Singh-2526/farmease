
// /NEW 23-04-2026

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

  userId: String,
  ownerId: String,
  toolId: String,
  toolName: String,
  toolImage: String,
  location: String,
  days: Number,
  pricePerDay: Number,
  amount: Number,
  paymentId: String,
  orderId: String,
  payemntStatus:{
    type:String,
    default:"Pending"
  },
  bookingStatus:{
    type:String,
    default:"Booked"
  },

  
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);