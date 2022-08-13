const dotenv = require("dotenv");
const Joi = require("joi");
const mongoose = require("mongoose");
const path = require("path");

dotenv.config({
    path: path.join(__dirname, "../.env"),
});

const envVarsSchema = Joi.object().keys({
    NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .required()
    .default("development"),
    PORT: Joi.number().default(3000),
    MONGO_URI: Joi.string().required().description("MongoDB connection URI"),
})
.unknown();

const {value: envVars, error} =
envVarsSchema.prefs({
    errors: {
        label: "key",
    },
})
.validate(process.env);

if(error){
    throw new Error(`config validation error: ${error.message}`);
}

module.exports = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    mongoose: {
        url: envVars.MONGO_URI,
        options:{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    },
};