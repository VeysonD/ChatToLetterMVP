var express = require('express');
var db = require('./db/config.js');
var Message = require('./db/models/message.js');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(__dirname + '/'));


app.get('/messages', function(req, res, next) {
  console.log('GET message request', req);
  console.log('GET message response', res);
  // Message.find({}).exec(function(err, messages) {
  //   res.status(200).send(links);
  // })
  console.log(next);
    next();

})

app.post('/messages', function(req, res) {
  console.log('POST message request', req.body);
  console.log('POST message response', res);
  res.end();
})

module.exports = app;
