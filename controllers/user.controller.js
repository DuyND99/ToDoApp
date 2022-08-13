const catchAsync = require("../Utils/catchAsync");
const {userService} = require("../services");

const register = catchAsync(async(req,res) => {
    const result = await userService.register(req.body);
    res.send(result);
});

const login = catchAsync(async(req,res) => {
    let result = await userService.login({
        email: req.body.email,
    });
    if(!result) return res.status(400).send('Invalid email or password');
    const password = await userService.login({
        password: req.body.password,
    });
    if(!password) return res.status(400).send('Invalid email or password');
})


module.exports = {
    register,
    login,
}