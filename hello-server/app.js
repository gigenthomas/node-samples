const http = require('http');
const Rectangle = require('./rectangle/rectangle');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

   rectange = new Rectangle( 10, 10);
   console.log(rectange.area());
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});