const {password} = require("./custom.validations");
const Joi = require("joi");
const { join } = require("lodash");

const register = {
        email: Joi.string().email().required(),
        password: Joi.string().required().custom(password),
  
}
module.exports = {
    register,
}