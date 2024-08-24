var http = require('http');

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.url === '/serverinfo') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ username: process.env.username || 'defaultUser' }));
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
