//var app = require('./letterapp.js')
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'))

console.log ('hi');
var port = 8080;
app.listen(port);
console.log('Server now listening on port ' + port);
