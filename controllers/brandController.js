const Brand = require("../models/Brand");
const mongoose = require("mongoose");

async function createBrand(req, res) {
  const brand = new Brand({
    brandImage: req.body.brandImage,
    brandTitle: req.body.brandTitle,
  });
  const result = await brand.save();
  res.status(201).send(result);
}

async function getAllBrands(req, res) {
  const brands = await Brand.find({});
  res.send(brands);
}

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
