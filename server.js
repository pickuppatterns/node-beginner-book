var http = require('http');
var url = require('url')

//We’ve added the handle parameter to our start() function, 
//and pass the handle object on to the route() callback, as 
//its first parameter”
 
function start(route, handle) {
   function onRequest(request, response) {
   var pathname = url.parse(request.url).pathname;
   console.log('Request for '  + pathname + ' received.');  
   
   route(handle, pathname); 

   response.writeHead(200, { 'Content-Type': 'text/plain' });
   response.write('Hello World');
   response.end();
}
http.createServer(onRequest).listen(8888);

console.log('Server has started');
}
exports.start = start;