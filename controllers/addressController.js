const Address = require("../models/Address");
const mongoose = require("mongoose");

// @desc    Create a Address
// @route   POST /v1/api/address
// @access  Private
async function createAddress(req, res) {
  const address = new Address({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    mobile: req.body.mobile,
    line1: req.body.line1,
    line2: req.body.line2,
    city: req.body.city,
    country: req.body.country,
    zipCode: req.body.zipCode,
  });
  const result = await address.save();
  res.status(201).send(result);
}

// @desc    get all Address
// @route   GET /v1/api/address
// @access  Public
async function getAllAddress(req, res) {
  const address = await Address.find({});
  res.send(address);
}

// @desc    update a address by id
// @route   PUT /v1/api/address/:id
// @access  Private
async function updateAddress(req, res) {
  const address = await Address.findByIdAndUpdate(req.params.id, {
    $set: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      mobile: req.body.mobile,
      line1: req.body.line1,
      line2: req.body.line2,
      city: req.body.city,
      country: req.body.country,
      zipCode: req.body.zipCode,
    },
  });
  console.log(address);
  res.status(200).send(address);
}

// @desc    Delete a address by id
// @route   DELETE /v1/api/address/:id
// @access  Private
async function deleteAddress(req, res) {
  const address = await Address.findByIdAndUpdate(req.params.id, {
    $set: {
      softDelete: true,
    },
  });
  res.status(200).send(address);
}

module.exports = {
  getAllAddress,
  createAddress,
  updateAddress,
  deleteAddress,
};
