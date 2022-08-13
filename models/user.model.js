const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const validator = require("validator");
const { default: validator } = require("validator");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("email is invalid");
            }
        },
    },
    password:{
        type: String,
        required: true,
        minLength: 6,
    }
});

userSchema.pre('save', async function (next) {
    const rounds = 10;
    const hash = await bcrypt.hash(this.password, rounds);
    this.password = hash;
    next();
});
const User = mongoose.model("User", userSchema);
module.exports = User;