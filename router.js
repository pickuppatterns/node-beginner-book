function route(handle, pathname) {
  console.log('About to route a request for' + pathname);
  if (typeof handle[pathname] === 'function') {
    //example of what NOT TO DO!!!!!!!!!!!!!!!!
    return handle[pathname]();
  }else{
    console.log('No request handler found for' + pathname);
    return "404 Not Found";
  }
}
 //explanation: Do not use a return like you would in Ruby or php
//running this git iteration will show why
exports.route = route;

