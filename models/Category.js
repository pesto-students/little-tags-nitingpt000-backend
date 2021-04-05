const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  image: String,
  title: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Category", categorySchema);
