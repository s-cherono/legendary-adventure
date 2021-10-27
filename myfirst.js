var http = require('http');
var mydate = require('./myfirstmodule'); //this is a module i have created
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var urlstring = url.parse(req.url, true).query;
  var name = urlstring.name;
  //res.write(name);
  res.end(name);
  
}).listen(8080);