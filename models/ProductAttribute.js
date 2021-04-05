const mongoose = require("mongoose");

const productAttributeSchema = new mongoose.Schema({
  attributeSize: {
    type: String,
  },
  attributeVariant: {
    type: String,
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

module.exports = mongoose.model("ProductAttribute", productAttributeSchema);
