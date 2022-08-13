const authmiddleware = require("../middleware/auth.middleware")
const {taskController} = require("../controllers");
const {taskValidation} = require("../validations");
const express = require("express");
const route = express.Router();

route.route("/")
.get([authmiddleware],taskController.getTasks)

route.route("/:userId")
.get([authmiddleware],taskController.getTask)
.post([authmiddleware],taskValidation.createTask,taskController.createTask)
.put([authmiddleware],taskController.updateTask)
.delete([authmiddleware],taskController.deleteTask);

module.exports = route;