const mongoose = require("mongoose");

const paymentsSchema = new mongoose.Schema({
  name: String,
  cardNumber: String,
  expiry: String,
  cardHash: String,
  currency: String,
  softDelete: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
});

const Payment = mongoose.model("Payment", paymentsSchema);

module.exports = Payment;
