function route(pathname) {
  console.log('About to route a request for' + pathname);
}
//“Right now, the routing “ends” in the router, and the router is not the place to actually 
//“do” something with the requests, because that wouldn’t scale well once our application 
//becomes more complex.”

exports.router = route;
