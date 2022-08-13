const catchAsync = require("../Utils/catchAsync");
const {taskService} = require("../services");
const {userModel} = require("../models");



const getTasks =catchAsync( async(req, res) =>{
    const tasks = await taskService.getTasks();
    res.send(tasks);
});

const getTask = catchAsync(async (req, res) => {
    const task = await taskService.getTask();
    res.send(task);
})

const createTask = catchAsync(async(req,res) => {
    const task = await taskService.createTask();
    res.send(task);
})

const updateTask = catchAsync(async(req, res) => {
    const {taskId} = req.params;
    const task = await taskService.updateTask(taskId, req.body);
    res.send(task); 
})

const deleteTask = catchAsync(async(req, res) => {
    const {taskId} = req.params;
    const task = await taskService.deleteTask(taskId, req.body);
    res.send(task);
})

module.exports = {
    getTask,
    getTasks,
    createTask,
    updateTask,
    deleteTask

}