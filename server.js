const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');
// const config = require('./config');


app.use(bodyParser.json());

app.use('/api', apiRouter);

app.use('/*', (req, res) => {
    //console.log(req);
    console.log('invalid url')
    res.status(404).send()
  })

module.exports = app;