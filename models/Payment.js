const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  name: String,
  cardNumber: [String],
  expiry: String,
  cardHash: String,
  currency: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Payment", paymentSchema);
