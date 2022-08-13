
const Joi = require("joi");
const { join } = require("lodash");

const createTask = {
    body: join.object().keys({
        name: Joi.string().required(),
        status: Joi.string().valid("ToDo", "InProgress", "Done"),
        createdAt: Joi.date(),
        userId: Joi.string(),
    }),
};

const getTask = {
    body: join.object().keys({
        taskId: Joi.required(),
    })
}

module.exports = {
    createTask,
    getTask,

}