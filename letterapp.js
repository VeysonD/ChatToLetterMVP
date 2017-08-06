var express = require('express');
var db = require('./db/config.js');
var Message = require('./db/models/message.js');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res, next) {
  console.log('letterapp js get homepage request');
  next();
});

app.get('/messages', function(req, res, next) {
  console.log('GET message request', req);
  console.log('GET message response', res);

  Message.find({}).exec(function(err, messages) {
    console.log('GET messages', messages);
    res.status(200).send(messages);
  });
})

app.post('/messages', function(req, res, next) {
  console.log('POST message request', req.body);
  console.log('POST message response', res);
  var message = req.body.message;
  var sender = req.body.sender;
  var date_time = req.body.date_time;

  var newMessage = new Message({
    message: message,
    sender: sender,
    date_time: date_time
  });
  newMessage.save(function(err, nMessage) {
    if (err) {
      res.status(500).send(err);
    }
  });
   next();
})

module.exports = app;
