var http = require('http');

http.createServer(function (req, res) {
  if (req.url === '/serverinfo') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(process.env.username);
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
}).listen(2000, () => {
  console.log('Server running at http://localhost:2000');
});
