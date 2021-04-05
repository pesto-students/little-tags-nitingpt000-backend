const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  brandImage: String,
  brandTitle: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Brand", brandSchema);
