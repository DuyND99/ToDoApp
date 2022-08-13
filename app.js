const routes = require("./routes")
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const helmet = require("helmet");
const express = require('express');
const app = express();



app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(xss());

app.use(mongoSanitize());

app.use(cors());

app.options("*", cors());

app.use("/",route())



module.exports = app