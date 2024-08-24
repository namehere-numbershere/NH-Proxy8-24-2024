
var http = require('http');
http.createServer(function (req, res) {
  res.write('alert("Hello World!")'); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 8080


