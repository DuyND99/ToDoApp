const express = require("express");
const {route} = require("./user.route");
const userRoute = require("./user.route");

const router = express.Router();

const routes = [
    {
        path: "/api/user",
        route: userRoute,
    }
];

routes.forEach((route) => {
    router.use(route.path, route.route);
});
module.exports = router;