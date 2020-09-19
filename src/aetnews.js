const fetch = require("node-fetch");
const getnews = async function (type) {
  const results = await fetch(
    "http://newsapi.org/v2/top-headlines?country=kr&apiKey=04b3ff2533fc47d183985a6f460d561e",
    {
      method: "GET",
    }
  ).then(res => res.json()) // expecting a json response
  .then(json => console.log(json));
};

getnews("D");
