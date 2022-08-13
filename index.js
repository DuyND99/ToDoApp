const config = require("./config/config")
const mongoose = require("mongoose");

const app = require("./app");

let server;

mongoose
.connect(config.mongoose.url, config.mongoose.options)
.then(()=>{
    console.log("connected to database");
server = app.listen(config.port, ()=>{
 console.log(`server started on port ${config.port}`)
})
})
.catch((err) =>{
 console.error(err)
});

const exitHandler = () => {
    if(server){
        process.exit(1);
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (err) => {
    console.log("UncaughtException", err);
    exitHandler();
};

process.on('uncaughtException',unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
process.on("SIGTERM", () => {
    if(server){
        server.close();
    }
});