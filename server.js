const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const config = require('./config');


app.use(bodyParser.json());



module.exports = app;