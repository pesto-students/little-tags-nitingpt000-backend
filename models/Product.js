const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: String,
  productImages: [String],
  currency: String,
  price: Number,
  retailPrice: Number,
  description: String,
  categories: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
  brand: String,
  productAttributes: [String],
  softDelete: {
    type: Boolean,
    default: false,
  },
});

const Product = mongoose.model("Product", productsSchema);

module.exports = Product;
