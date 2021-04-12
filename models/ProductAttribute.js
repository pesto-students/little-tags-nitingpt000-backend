const mongoose = require("mongoose");

const productAttributeSchema = new mongoose.Schema({
  attributeSize: {
    type: String,
    required: true,
  },
  attributeVariant: {
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

const ProductAttribute = mongoose.model(
  "ProductAttribute",
  productAttributeSchema
);

module.exports = ProductAttribute;
