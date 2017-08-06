var db = require('../config.js');
var mongoose = require('mongoose');
var Promise = require('bluebird');

mongoose.Promise = require('bluebird');

var messageSchema = mongoose.Schema({
  message: String,
  sender: String,
  date_time: String
});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;
