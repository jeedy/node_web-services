const http = require('http');

console.log("server start....1")
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  res.end('Hello World');
});
server.listen(3000, function(){
  console.log('ready captain!');
});

console.log("server start....2")