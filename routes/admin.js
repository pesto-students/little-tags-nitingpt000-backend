const router = require("express").Router();
const { getProducts } = require("../controllers/productController");
const Product = require("../models/Product");
router.route("/login").post((req, res) => {
  res.render("login");
});
router.route("/orders").get((req, res) => {
  const obj = getpros();
  obj.then((result) => console.log(result));
  res.render("orders");
});

async function getpros() {
  const products = await Product.find({});
  return products;
}

module.exports = router;
