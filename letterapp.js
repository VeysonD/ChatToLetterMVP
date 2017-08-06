var express = require('express');
var db = require('./db/config.js')
var Message = require('./db/models/message.js')


var app = express();
app.use(express.static(__dirname + '/'))

app.get('/messages', function(req, res) {
  console.log('message request', req);
  console.log('message response', res);
  Message.find({}).exec(function(err, messages) {
    res.status(200).send(links);
  })
})

module.exports = app;
