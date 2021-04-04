const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send(`<h1>Admin Panel</h1>
  <form  action="/users" method="post">
    <label> Email<br>
      <input id='email' type='email' placeholder='email'>
    </label> <br><br>
    <label> Password<br>
      <input id='password' type='password' placeholder='password'>
    </label> 
    <br>
    <br>
    <input type='submit' value='Login'>
  </form>`);
});
router.get("/__test", function (req, res, next) {
  res.send("hello world");
});

module.exports = router;
