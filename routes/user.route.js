const {userValidation} = require("../validations")
const {userController} = require("../controllers")
const express = require("express");
const route = express.Router();

route.route("/")
.get(userController.register)
.post(userController.login);

module.exports = route;