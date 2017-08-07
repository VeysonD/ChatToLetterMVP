var express = require('express');
var db = require('./db/config.js');
var Message = require('./db/models/message.js');
var bodyParser = require('body-parser');


var app = express();

//puts body properties in the request functions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Serves up index.html
app.use(express.static(__dirname + '/'));

//add in zoom keys
var zoom_key = process.env['ZOOM_API_KEY'];
var zoom_sec = process.env['ZOOM_API_SEC'];


//Why does this never get console logged?
app.get('/', function(req, res, next) {
  console.log('letterapp js get homepage request');
  next();
});

var cleanText = function(text) {
  return text.replace('<', '');
}

//  MONGO DB MESSAGES
app.get('/messages', function(req, res, next) {
  console.log('GET message request', req);
  console.log('GET message response', res);

  Message.find({}).exec(function(err, messages) {
    console.log('GET messages', messages);
    res.status(200).send(messages);
  });
})

//ZOOM DB MESSAGES
// app.get('/messages', function(req, res, next) {
//   console.log('GET message request', req);
//   console.log('GET message response', res);
//
//   var options = {
//     qs: {
//       api_key: zoom_key,
//       api_secret: zoom_sec,
//       data_type: "JSON",
//       access_token: ,
//       session_id: ,
//       from: "2017-08-01",
//       to: "2017-08-06",
//     }
//   };
//   var syncReq = syncrequest('GET', "https://api.zoom.us/v1/chat/get", options);
//   var response = JSON.parse(syncReq.getBody('utf8'));
//   res.status(200).send(response);
//})

app.post('/messages', function(req, res, next) {
  console.log('POST message request', req.body);
  console.log('POST message response', res);
  var message = cleanText(req.body.message);
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
   res.status(200).send('Posted');
})

module.exports = app;
