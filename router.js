function route(handle, pathname) {
  // What we do here is, we check if a request handler for the 
  // given pathname exists, and if it does, we simply call the 
  // according function. Because we can access our request handler 
  // functions from our object just as we would access an element of 
  // an associative array, we have this nice fluent handle[pathname](); 
  // expression I talked about earlier: “Please, handle this pathname”.

  console.log('About to route a request for' + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname]();
  }else{
    console.log('No request handler found for' + pathname);
  }
}
exports.route = route;

