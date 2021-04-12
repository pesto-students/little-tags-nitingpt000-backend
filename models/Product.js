const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: String,
  productImages: [String],
  currency: String,
  price: Number,
  retailPrice: Number,
  description: String,
  categories: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Category",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
  },
  productAttributes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Category",
  },
  softDelete: {
    type: Boolean,
    default: false,
  },
});

const Product = mongoose.model("Product", productsSchema);

module.exports = Product;
