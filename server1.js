const http = require("http");
const fs = require('fs');
const path = require('path');
const server = http.createServer(function (req, res) {
  console.log(req.url);

  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'multipage_site', 'index.html'), (err, someData) => {
      if (err) {
        throw err
      } else {
        res.writeHead(
          200,
          { 'Contet-Type': 'text/html' }
        );
        res.end(someData);
      }
    })
  } else if (req.url === "/content") {
    fs.readFile(path.join(__dirname, 'multipage_site', 'index2.html'), (err, someData) => {
      if (err) {
        throw err
      } else {
        res.writeHead(
          200,
          { 'Contet-Type': 'text/html' }
        );
        res.end(someData);
      }
    });
  }
});

server.listen(3000, () => {
  console.log('Serer has been started!');
})
