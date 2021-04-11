const Address = require("../models/Address");
const mongoose = require("mongoose");

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

async function getAllAddress(req, res) {
  const address = await Address.find({});
  res.send(address);
}

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
