const router = require("express").Router();
const {
  getAllRatings,
  createRating,
  updateRating,
  deleteRating,
} = require("../controllers/ratingController");

router.route("/").get(getAllRatings).post(createRating);
router.route("/:id").put(updateRating).delete(deleteRating);

module.exports = router;
