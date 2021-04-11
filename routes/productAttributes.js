const router = require("express").Router();
const {
  getAllProductAttributes,
  createProductAttribute,
  updateProductAttribute,
  deleteProductAttribute,
} = require("../controllers/productAttributeController");

router.route("/").get(getAllProductAttributes).post(createProductAttribute);
router.route("/:id").put(updateProductAttribute).delete(deleteProductAttribute);

module.exports = router;
