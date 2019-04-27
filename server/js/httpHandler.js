const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messages = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url + 'res' + res);
  if (req.method === "GET") {
    res.writeHead(200, headers);
    res.end(messages.dequeue());

  } else if (req.method === "POST" && req.url === 'http://127.0.0.1:3000/background.jpg') {
    req.on('data', chunk => {
      console.log('data chunk: ${chunk}')
      
    });
    req.on('end', () => {
      console.log('this is a unix system, i know this!')
    });


  }
  

  // req.on('data', chunk => {
  //   console.log('data chunk: ${chunk}')
  // });
  // req.on('end', () => {
  //   console.log('this is a unix system, i know this!')
  // });
  // res.write('success!');
  // res.end(messages.dequeue());
};