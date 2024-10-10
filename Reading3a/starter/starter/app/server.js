let express = require("express");

let app = express();

let port = 3000;
let hostname = "localhost";

app.use(express.json());
app.use(express.static("public"));

app.get("/index.html", (req, res) => {
  console.log("Sending index.html");
  // alternative to res.send, puts contents of file in response body and sends response
  res.sendFile("public/index.html", { root: __dirname });
});
app.get("/script.js", (req, res) => {
  console.log("Sending script.js");
  res.sendFile("public/script.js", { root: __dirname });
});
let count = 1;
app.get("/count", (req, res) => {
  count++;
  res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Index</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <p>This URL has been visited ${count} times.</p>
</body>
</html>`);
});

app.post("/bubbles", (req, res) => {
  const { fizzy } = req.body;

  if (typeof fizzy !== 'undefined') {
    const response = `${fizzy}abc`;
    res.send(response);
  } else {
    res.send("Where is fizzy?");
  }
});

app.listen(port, hostname, () => {
  console.log(`Listening at: http://${hostname}:${port}`);
});
