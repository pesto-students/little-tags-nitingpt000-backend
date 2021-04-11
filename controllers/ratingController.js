const Rating = require("../models/Rating");
const mongoose = require("mongoose");

async function createRating(req, res) {
  const rating = new Rating({
    user: req.body.user,
    rating: req.body.rating,
    product: req.body.product,
  });
  const result = await rating.save();
  res.status(201).send(result);
}

async function getAllRatings(req, res) {
  const ratings = await Rating.find({});
  res.send(ratings);
}

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
