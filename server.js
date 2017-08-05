var express = require('express');
var app = express();

app.set('port', 8080);

//this will serve up the client files
app.use(express.static(__dirname + '/'));

app.listen(app.get('port'));
console.log('Listening on LocalHost:', app.get('port'));
