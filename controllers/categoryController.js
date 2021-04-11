const Category = require("../models/Category");
const mongoose = require("mongoose");

async function createCategory(req, res) {
  const category = new Category({
    image: req.body.image,
    title: req.body.title,
  });
  const result = await category.save();
  res.status(201).send(result);
}

async function getAllCategories(req, res) {
  const categories = await Category.find({});
  res.send(categories);
}

async function updateCategory(req, res) {
  const category = await Category.findByIdAndUpdate(req.params.id, {
    $set: {
      image: req.body.image,
      title: req.body.title,
    },
  });
  console.log(category);
  res.status(200).send(category);
}

async function deleteCategory(req, res) {
  const category = await Category.findByIdAndUpdate(req.params.id, {
    $set: {
      softDelete: true,
    },
  });
  res.status(200).send(category);
}

module.exports = {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
};
