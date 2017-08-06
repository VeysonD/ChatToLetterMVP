var app = require('./letterapp.js')
var port = 8080;
app.use(express.static(__dirname + '/client'));
app.listen(port);
console.log('Server now listening on port ' + port);
