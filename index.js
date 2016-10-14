'use strict';

const express = require('express');
const app = express();

const http = require('http').Server(app);

const port = process.env.PORT || 3000;

const path = __dirname;
app.use('/', express.static(path));

http.listen(port, () => {
    console.log('Listening on: ' + port + '...');
});
