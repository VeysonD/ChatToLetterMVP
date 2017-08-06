var mongoose = require('mongoose');
var db = mongoose.connection;

mongoURI = 'mongodb://localhost/chaoschat';
mongoose.connect(mongoURI);

db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {
  console.log('Welcome to MON GOD');
});

module.exports = db;
