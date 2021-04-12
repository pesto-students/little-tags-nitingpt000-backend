const mongoose = require("mongoose");

const paymentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  expiry: {
    type: String,
    required: true,
  },
  cardHash: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
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
