const Rating = require("../models/Rating");
const mongoose = require("mongoose");

// @desc    Create a rating
// @route   POST /v1/api/ratings
// @access  Private
async function createRating(req, res) {
  const rating = new Rating({
    user: req.body.user,
    rating: req.body.rating,
    product: req.body.product,
  });
  const result = await rating.save();
  res.status(201).send(result);
}

// @desc    get all ratings
// @route   GET /v1/api/ratings
// @access  Public
async function getAllRatings(req, res) {
  const ratings = await Rating.find({}).populate("user");
  res.send(ratings);
}

// @desc    update a rating by id
// @route   PUT /v1/api/ratings/:id
// @access  Private
async function updateRating(req, res) {
  const rating = await Rating.findByIdAndUpdate(req.params.id, {
    $set: {
      user: req.body.user,
      rating: req.body.rating,
      product: req.body.product,
    },
  });
  console.log(rating);
  res.status(200).send(rating);
}

// @desc    Delete a rating by id
// @route   DELETE /v1/api/rating/:id
// @access  Private
async function deleteRating(req, res) {
  const rating = await Rating.findByIdAndUpdate(req.params.id, {
    $set: {
      softDelete: true,
    },
  });
  res.status(200).send(rating);
}

module.exports = {
  getAllRatings,
  createRating,
  updateRating,
  deleteRating,
};
