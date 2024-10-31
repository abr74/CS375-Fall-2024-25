const express = require("express");
const app = express();

const port = 3000;
const hostname = "localhost";

app.use(express.static("public"));

// returns random integer in range [min, max]
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Examples
function getRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

app.get("/random", (req, res) => {
  console.log("Received query string:", req.query);
  let randomNumber = getRandomIntegerInRange(Number(req.query.min), Number(req.query.max));
  console.log("Selected random number", randomNumber);
  res.json({ number: randomNumber });
});

app.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}`);
});

/*
TEXT ANSWERS GO HERE

*/
