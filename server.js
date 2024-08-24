var http = require('http');

http.createServer(function (req, res) {
  if (req.url === '/serverinfo') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ username: process.env.username || 'defaultUser' }));
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not 2Found');
  }
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
