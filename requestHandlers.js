function start() {
  console.log("Request handler 'start' was called.");
  //example of what NOT TO DO!!!!!!!!!!!!!!!!
  return 'Hello Start';
}
function upload() {
  console.log("Request handler 'upload' was called.");
  //example of what NOT TO DO!!!!!!!!!!!!!!!!
  return 'Hello Upload';
  }
  //explanation: Do not use a return like you would in Ruby or php
  //running this git iteration will show why
  exports.start = start;
  exports.upload = upload;