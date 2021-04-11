const router = require("express").Router();
const {
  getAllAddress,
  createAddress,
  updateAddress,
  deleteAddress,
} = require("../controllers/addressController");

router.route("/").get(getAllAddress).post(createAddress);
router.route("/:id").put(updateAddress).delete(deleteAddress);

module.exports = router;
