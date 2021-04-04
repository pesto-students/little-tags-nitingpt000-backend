const { boolean } = require("joi");
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  order_amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
    max: 2,
  },
  order_discount: {
    type: Number,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  order_date: {
    type: Date,
    default: Date.now,
  },
  product_ids: {
    type: [String],
    required: true,
  },
  product_quantities: {
    type: [Number],
    required: true,
  },
  address_id: {
    type: String,
    required: true,
  },
  payment_id: {
    type: String,
    required: true,
  },
  extra_misc: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  softDelete: {
    type: Boolean,
    default: false,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
