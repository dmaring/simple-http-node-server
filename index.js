const http = require('http');
const fs = require('fs');
const port = 3000;

// handle http request to get /hello
const requestHandler = (request, response) => {
  // use fs to create a hello-world.txt file
  // write the content "Hello to this great world"
  fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf-8', (err) => {
    if (err) throw err;
    console.log('successfully created file')
  })
}

// create server and pass in requestHandler function
const server = http.createServer(requestHandler);

// start the server running on port 3000
server.listen(port, (err) => {
  if (err) {
    return console.log('You have an error: ${err}');
  }

  console.log('server is listening on ' + port);
});
