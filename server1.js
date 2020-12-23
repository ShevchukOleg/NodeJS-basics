const http = require("http");

const server = http.createServer(function (req, res) {
  res.end("<h1>NodeJS server is working</h1>");
});

server.listen(3000, () => {
  console.log('Serer has been started!');
})