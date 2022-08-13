const {User} = require("../models/user.model");

const register = async(userBody)=>{
    const user = await User.create(userBody);
    return user;
}

const login = async(userBody)=>{
    const user = await User.findOne(userBody);
    return user;
}

module.exports = {
    register,
    login,
}