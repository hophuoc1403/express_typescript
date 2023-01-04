var express = require('express');
var dotenv = require('dotenv');
dotenv.config();
var app = express();
var port = process.env.PORT;
app.get('/', function (req, res) {
    res.send('Express + TypeScript Server');
});
app.listen(port, function () {
    console.log("[server]: Server is running at http://localhost:".concat(port));
});
