const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const userRouter = require('./router/signupRouter');
const jobRouter = require("./router/jobRouter");
const loginRouter = require("./router/loginRouter");
const sendMailRouter = require("./router/sendMailRouter");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/',userRouter);
app.use('/',jobRouter);
app.use('/',loginRouter);
app.use('/',sendMailRouter);

module.exports = app;
