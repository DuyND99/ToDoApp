const {status} = require("../config/status")
const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        enum: status,
        default: "ToDo",
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    userId:{
        type: String,
    }
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;