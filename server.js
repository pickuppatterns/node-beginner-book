var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
      console.log("Request for " + pathname + " received.");

      request.setEncoding('utf-8');
      request.addListener('data', function(postDataChunk) {
        postData += postDataChunk;
        console.log("Received POST data chunk '"+postDataChunk + "' .");
      });
      request.addListener("end", function() {
        route(handle, pathname, response, postData);
      });
    }
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
 }
 
 exports.start = start;

 //We basically did three things here: First, we defined that we expect the encoding 
//  of the received data to be UTF-8, we added an event listener for the “data” event 
//  which step by step fills our new postData variable whenever a new chunk of POST data 
//  arrives, and we moved the call to our router into the end event callback to make sure 
//  it’s only called when all POST data is gathered. We also pass the POST data into the 
//  router, because we are going to need it in our request handlers.

// Adding the console logging on every chunk that is received probably is a bad idea for 
// production code (megabytes of POST data, remember?), but makes sense to see what happens.
