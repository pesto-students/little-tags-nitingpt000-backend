const ProductAttribute = require("../models/ProductAttribute");
const mongoose = require("mongoose");

// @desc    Create a ProductAttribute
// @route   POST /v1/api/productAttributes
// @access  Private
async function createProductAttribute(req, res) {
  const productAttribute = new ProductAttribute({
    attributeSize: req.body.attributeSize,
    attributeVariant: req.body.attributeVariant,
  });
  const result = await productAttribute.save();
  res.status(201).send(result);
}

// @desc    get all productAttributes
// @route   GET /v1/api/productAttributes
// @access  Public
async function getAllProductAttributes(req, res) {
  const productAttributes = await ProductAttribute.find({});
  res.send(productAttributes);
}

// @desc    update a productAttribute by id
// @route   PUT /v1/api/productAttributes/:id
// @access  Private
async function updateProductAttribute(req, res) {
  const productAttribute = await ProductAttribute.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        attributeSize: req.body.attributeSize,
        attributeVariant: req.body.attributeVariant,
      },
    }
  );
  console.log(productAttribute);
  res.status(200).send(productAttribute);
}

// @desc    Delete a productAttribute by id
// @route   DELETE /v1/api/productAttributes/:id
// @access  Private
async function deleteProductAttribute(req, res) {
  const productAttribute = await ProductAttribute.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        softDelete: true,
      },
    }
  );
  res.status(200).send(productAttribute);
}

module.exports = {
  getAllProductAttributes,
  createProductAttribute,
  updateProductAttribute,
  deleteProductAttribute,
};
