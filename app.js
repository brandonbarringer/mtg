var express = require("express");
var app = express();
var path = require("path");
const mtg = require("mtgsdk");

// viewed at http://localhost:8080
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(8080);

console.log("working");

mtg.card.find(3).then(result => {
	console.log(result); // "Black Lotus"
});
