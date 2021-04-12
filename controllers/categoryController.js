const Category = require("../models/Category");
const mongoose = require("mongoose");

// @desc    Create a Category
// @route   POST /v1/api/categories
// @access  Private
async function createCategory(req, res) {
  const category = new Category({
    image: req.body.image,
    title: req.body.title,
  });
  const result = await category.save();
  res.status(201).send(result);
}

// @desc    get all Categories
// @route   GET /v1/api/categories
// @access  Public
async function getAllCategories(req, res) {
  const categories = await Category.find({});
  res.send(categories);
}

// @desc    update a Category by id
// @route   PUT /v1/api/categories/:id
// @access  Private
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

// @desc    Delete a Category by id
// @route   DELETE /v1/api/categories/:id
// @access  Private
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
