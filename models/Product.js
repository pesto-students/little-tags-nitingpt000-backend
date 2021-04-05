const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  productImages: {
    type: [String],
    validate: {
      validator: function (value) {
        return value && value.length > 0;
      },
      message: "there should be atleast one image",
    },
  },
  currency: {
    type: String,
  },
  price: {
    type: Number,
  },
  retailPrice: {
    type: Number,
  },
  description: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  ratingAvg: Number,
  ratingCount: Number,
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
  },
  productAttribute: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductAttribute",
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

module.exports = mongoose.model("Product", productSchema);
