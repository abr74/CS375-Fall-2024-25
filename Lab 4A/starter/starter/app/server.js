let axios = require("axios");
let express = require("express");
let app = express();
app.use(express.static("public"));

let apiFile = require("../key.json");
let apiKey = apiFile["key"];

let port = 3000;
let hostname = "localhost";

let baseUrl = "https://api.openweathermap.org/data/2.5/weather";


const kelvintoFahrenheit = (kelvin) => {
  return ((kelvin - 273.15) * 9/5) + 32;
};

app.get("/feels-like", (req, res) => {
  let zip = req.query.zip;
  let url = `${baseUrl}?zip=${zip}&appid=${apiKey}`;
  axios.get(url).then((response) => {
    console.log("Received response:", response.data);
    const feelsLikeF = kelvintoFahrenheit(response.data.main.feels_like);
    res.json({
      "zip": zip,
      "feels-like-fahrenheit": feelsLikeF
    });
  });
  console.log(`Sending request to: ${url}`);
});

app.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}`);
});
