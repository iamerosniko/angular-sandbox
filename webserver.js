var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic("Test"));

app.listen(5100);

//run node webserver.js

//localhost:5100/aaplicationfolder