const Joi = require("joi");

const registerValidation = (data) => {
  const userSchema = Joi.object({
    userName: Joi.string().min(6).required(),
    userEmail: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
  });

  return userSchema.validate(data);
};

const loginValidation = (data) => {
  const userSchema = Joi.object({
    userEmail: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
  });

  return userSchema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
