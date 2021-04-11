const router = require("express").Router();
const verify = require("../middleware/verifyToken");
const {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
} = require("../controllers/productController");

router.route("/").get(getProducts).post(verify, createProduct);
router.route("/:id").get(getProductById).delete(verify, deleteProduct);

module.exports = router;
