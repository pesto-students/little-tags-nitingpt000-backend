const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");

// @desc    Post create user
// @route   GET /v1/api/user/register
// @access  Public
const registerUser = async (req, res) => {
  //validate register user schema
  const { error } = registerValidation(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  // checking if the user already exist
  const emailExist = await User.findOne({ userEmail: req.body.userEmail });
  if (emailExist) return res.status(400).send("email already exists");
  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //create a new user
  const user = new User({
    userName: req.body.userName,
    userEmail: req.body.userEmail,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: savedUser._id });
  } catch (error) {
    res.status(400).send(error);
  }
};

// @desc    Post login user
// @route   GET /v1/api/user/login
// @access  Public
const loginUser = async (req, res) => {
  //validate login user schema
  const { error } = loginValidation(req.body);
  if (error) return res.status(404).send(error.details[0].message);
  // checking for user exist in database
  const user = await User.findOne({ email: req.body.userEmail });
  if (!user) return res.status(400).send("email and password are incorrect");
  // checking if the user password is valid
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass)
    return res.status(400).send("email and password are incorrect");
  //create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
  //   res.send("logged in");
};

module.exports = {
  registerUser,
  loginUser,
};
