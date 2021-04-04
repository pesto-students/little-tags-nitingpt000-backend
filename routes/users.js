const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  console.log("users post", req.body);
  req.session.auth = "eroiurerdfdf";
  res.send("respond with a resource");
});

module.exports = router;
