const {Task} = require("../models/task.model");

const getTasks = async()=>{
    const tasks = await Task.find();
    return tasks;
}

const getTask = async(taskId) => {
    const task = await Task.findById(taskId);
    return task;
}

const createTask = async(taskBody) => {
    const task = await Task.create(taskBody);
    return task;
}

const updateTask = async(taskId) => {
    const task = await getTask(taskId);
    if(!task){
        console.log("task not found");
    }
    await task.save();
    return task;
}
const deleteTask = async(taskId) => {
    const task = await getTask(taskId);
    if(!task){
        console.log("task not found");
    }
    await task.remove();
    return task;
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}