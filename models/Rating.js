const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  user: String,
  rating: Number,
  product: String,
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

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;
