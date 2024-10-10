// require() is Node's version of Python's import
let http = require("http");
let fs = require("fs");
let path = require("path");

let hostname = "localhost";
let port = 3000;

// this function will be called whenever our server receives a request
// args are request and response objects with these properties:
// https://nodejs.org/api/http.html#http_class_http_clientrequest
// https://nodejs.org/api/http.html#http_class_http_serverresponse
function handleRequest(req, res) {
  console.log("Request URL:", req.url);
  console.log("Request headers:", req.headers);
  console.log("Request method:", req.method);
  console.log();

  let filepath = path.join(__dirname, req.url);
  try {
    let data = fs.readFileSync(filepath, "utf-8");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(data);
    // console.log(data); // file contents
  } catch (error) {
      if (error.code === 'ENDENT') {
        
      }
  }

  // res.statusCode = 200;
  // console.log(res.statusCode);

  // sets the response body and sends the response to the client
  // should be called exactly once for each request
  // res.end(data);
}

// now handleRequest will be called whenever our program receives a request
// the server will automatically pass request and response objects to it
let server = http.createServer(handleRequest);

// starts the server listening for requests at http://<hostname>:<port>
// 3rd arg is a function called once when the server first starts
server.listen(port, hostname, function () {
  console.log(`Server listening on http://${hostname}:${port}`);
});
