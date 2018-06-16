'use strict';

//const express = require('express');
const app = require('./server');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
app.listen(PORT, function () {
    console.log(`listening on http://${HOST}:${PORT}`);
  });