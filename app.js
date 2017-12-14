var express = require("express");
var app = express();
var path = require("path");
const mtg = require("mtgsdk");

// viewed at http://localhost:8080
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(8080);


//Get all standard legal card objects
mtg.card.all({
	gameFormat: 'Standard',
}).on('data', function (card) {
  console.log(card)
});
