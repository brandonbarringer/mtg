var express = require("express");
var app = express();
var path = require("path");
const mtg = require("mtgsdk");

// viewed at http://localhost:8080
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(8080);


const standardCards = []

const getStandard = new Promise((resolve, reject) => {
	// Get all standard legal card objects
	mtg.card.all({
		gameFormat: 'Standard',
	}).on('data', (card) => {
	  resolve(standardCards.push(card))
	});
})


getStandard.then( () => {
	console.log(standardCards)
})
