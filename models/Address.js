const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  mobile: String,
  line1: String,
  line2: String,
  city: String,
  country: String,
  zipCode: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Address", addressSchema);
