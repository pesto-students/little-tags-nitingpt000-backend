const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  image: String,
  title: String,
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

const Category = mongoose.model("Category", categoriesSchema);

module.exports = Category;
