//require the http module that ships with Node.js and makes it accessible through the variable http
var http = require("http");
//call the function createServer
//this function returns and object and has the method named listen giving
//the numeric port name 8888
http.createServer(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hello World");
  response.end();
  })
  
  .listen(8888);