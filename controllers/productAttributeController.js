const ProductAttribute = require("../models/ProductAttribute");
const mongoose = require("mongoose");

async function createProductAttribute(req, res) {
  const productAttribute = new ProductAttribute({
    attributeSize: req.body.attributeSize,
    attributeVariant: req.body.attributeVariant,
  });
  const result = await productAttribute.save();
  res.status(201).send(result);
}

async function getAllProductAttributes(req, res) {
  const productAttributes = await ProductAttribute.find({});
  res.send(productAttributes);
}

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
