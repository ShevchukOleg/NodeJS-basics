const http = require("http");
const fs = require('fs');
const path = require('path');
const server = http.createServer(function (req, res) {
  const PORT = process.env.PORT || 3000; // можна використовувати системний порт локалхоста.
  let filePath = path.join(__dirname, 'multipage_site', (req.url === '/') ? 'index.html' : req.url)
  let extension = path.extname(filePath)
  let contentType = '';


  if (!extension) {
    filePath += ".html"
  }

  switch (extension) {
    case '.html': contentType = 'text/html'
      break
    case '.css': contentType = 'text/css'
      break
    case '.js': contentType = 'text/javascript'
      break
  }

  if (!filePath.includes("favicon.ico")) {
    console.log(req.url, filePath);
    fs.readFile(filePath, (err, page) => {
      if (err) {
        fs.readFile(path.join(__dirname, 'multipage_site', 'errorPage.html'), (err, errorPage) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': contentType });
            res.end('Error');
          } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(errorPage);
          }
        })
      } else {
        console.log(contentType)
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(page);
      }
    })
  }


  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname, 'multipage_site', 'index.html'), (err, someData) => {
  //     if (err) {
  //       throw err
  //     } else {
  //       res.writeHead(
  //         200,
  //         { 'Contet-Type': 'text/html' }
  //       );
  //       res.end(someData);
  //     }
  //   })
  // } else if (req.url === "/content") {
  //   fs.readFile(path.join(__dirname, 'multipage_site', 'index2.html'), (err, someData) => {
  //     if (err) {
  //       throw err
  //     } else {
  //       res.writeHead(
  //         200,
  //         { 'Contet-Type': 'text/html' }
  //       );
  //       res.end(someData);
  //     }
  //   });
  // }
});

server.listen(3000, () => {
  console.log('Serer has been started!');
})
