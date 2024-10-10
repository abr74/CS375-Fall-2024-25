let express = require("express");

// express returns a function, we can call it to create a server object
let app = express();

let port = 3000;
let hostname = "localhost";

app.use(express.json());

// middleware just for debugging
app.use("*", (req, res, next) => {
  console.log({ url: req.url, body: req.body });
  // makes sure next matching request handler is called
  // necessary b/c this doesn't send a response
  next();
});

app.post("/flargle", (req, res) => {
  console.log("You sent the body:", req.body);
  if(req.body.hasOwnProperty("flargle")) {
    res.json({
      hasFlargle: true
    })
  } else {
    res.json({
      hasFlargle: false
    })
  }
});
let visitors = [];
app.get("/visitors/:visitorName", (req, res) => {
  let visitorName = req.params.visitorName;
  console.log(req.params, visitorName);
  if(visitors.includes(visitorName)){
    res.json({hasVisited: true});
  } else {
    res.json({hasVisited: false});
  }
  
  
});
app.post("/visitors/:visitorName", (req, res) => {
  let visitorName = req.params.visitorName;
  console.log(req.params, visitorName);
  visitors.push(visitorName);
  res.json();
});

app.get('/all-visitors', (req, res) => {
  let visitorList = '<ul>';
  visitors.forEach(visitor => {
      visitorList += `<li>${visitor}</li>`;
  });
  visitorList += '</ul>';

  res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>All Visitors</title>
      </head>
      <body>
          <h1>List of Visitors</h1>
          ${visitorList}
      </body>
      </html>
  `);
});

app.listen(port, hostname, () => {
  console.log(`Listening at: http://${hostname}:${port}`);
});
