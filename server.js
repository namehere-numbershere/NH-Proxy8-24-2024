

import http from "http";
console.log("server.js started!");

const server = http.createServer((req, res) => {
res.setHeader('Access-Control-Allow-Origin', '*')
res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET'); // Allow OPTIONS and GET
res.setHeader('Access-Control-Max-Age', 60 * 60 * 24 * 30); // Set CORS preflight cache to 30 days
  // Set the response header
  res.writeHead(200, {'Content-Type': 'application/json'});

  // Create a data object to send
  const data = {
    message: 'Hello, client!',
    timestamp: new Date()
  };

  // Send the data as a JSON string
  res.end(JSON.stringify(data));
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

