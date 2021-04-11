const router = require("express").Router();
const {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

router.route("/").get(getAllCategories).post(createCategory);
router.route("/:id").put(updateCategory).delete(deleteCategory);

module.exports = router;
