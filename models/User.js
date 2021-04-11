const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  userEmail: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  userContact: {
    type: String,
    min: 6,
    max: 10,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  userImage: {
    type: String,
    min: 10,
    max: 255,
  },
  address: {
    type: [String],
    ref: "Address",
  },
  wishlist: {
    type: [String],
    ref: "Product",
  },
  orders: {
    type: [String],
    ref: "Order",
  },
  paymentMethod: {
    type: [String],
    ref: "Payment",
  },
  locale: String,
  userToken: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
