const createError = require("http-errors");
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const path = require("path");
const session = require('cookie-session')
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const helmet = require('helmet')

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const productsRouter = require("./routes/products");
const app = express();
require("dotenv").config();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayout);
app.set("view engine", "jade");

app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/v1/api/user", authRouter);
var expiryDate = new Date(Date.now() + 30*24*60 * 60 * 1000) // 30 days
app.use(session({
  name: 'vuyitsession',
  keys: ['keydfsdfsfdaw321erthd1', 'kefgw145rewtrgfdsgfy2', 'pozzzdeQQFWreddfdf'],
  cookie: {
    secure: true,
    httpOnly: true,
    path: '/',
    expires: expiryDate
  }
}));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/v1/api/products", productsRouter);
//connect mongodb
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => console.log(err)
);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
