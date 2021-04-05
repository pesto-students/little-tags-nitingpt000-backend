const { boolean } = require("joi");
const mongoose = require("mongoose");

const productOrdered = new mongoose.Schema({
  orderId: {
    type: Number,
    required: true,
  },
  product_id: {
    type: String,
    required: true,
    max: 2,
  },
  quantity: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now 
  }
});

module.exports = mongoose.model("ProductOrdered", productOrdered);
