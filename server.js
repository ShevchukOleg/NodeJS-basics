const http = require("http"); // присвоєння змінній вбудованого модулю Node.js
http.createServer(function (request, response) {
  response.end("Hello NodeJS")
})
  .listen(3000, '127.0.0.1', function () { // порт, локальна адреса, виконання при старті роботи серверу.
    console.log("Server starts working.")
  })