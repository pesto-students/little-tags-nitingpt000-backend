const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "home" });
});
router.get("/__test", function (req, res, next) {
  res.send("hello world");
});

module.exports = router;
