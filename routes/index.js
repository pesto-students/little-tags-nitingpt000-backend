const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("login", { title: "home" });
});
router.get("/orders", function (req, res, next) {
  res.render("orders", { title: "home" });
});
router.get("/__test", function (req, res, next) {
  res.send("hello world");
});

module.exports = router;
