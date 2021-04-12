const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  brandImage: {
    type: String,
    required: true,
  },
  brandTitle: {
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

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
