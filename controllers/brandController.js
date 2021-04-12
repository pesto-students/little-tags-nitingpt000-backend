const Brand = require("../models/Brand");
const mongoose = require("mongoose");

// @desc    Create a Brand
// @route   GET /v1/api/brands
// @access  Private
async function createBrand(req, res) {
  const brand = new Brand({
    brandImage: req.body.brandImage,
    brandTitle: req.body.brandTitle,
  });
  const result = await brand.save();
  res.status(201).send(result);
}

// @desc    Fetch all  Brands
// @route   GET /v1/api/brands
// @access  Public
async function getAllBrands(req, res) {
  const brands = await Brand.find({});
  res.send(brands);
}
// @desc    Update a  Brand by id
// @route   PUT /v1/api/brands/:id
// @access  PRIVATE
async function updateBrand(req, res) {
  const brand = await Brand.findByIdAndUpdate(req.params.id, {
    $set: {
      brandImage: req.body.brandImage,
      brandTitle: req.body.brandTitle,
    },
  });
  console.log(brand);
  res.status(200).send(brand);
}

// @desc    Delete a Brand by id
// @route   DELETE /v1/api/brands/:id
// @access  Private
async function deleteBrand(req, res) {
  const brand = await Brand.findByIdAndUpdate(req.params.id, {
    $set: {
      softDelete: true,
    },
  });
  res.status(200).send(brand);
}

module.exports = {
  getAllBrands,
  createBrand,
  updateBrand,
  deleteBrand,
};
