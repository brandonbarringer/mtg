const mtg = require("mtgsdk");

mtg.card.find(3).then(result => {
	console.log(result); // "Black Lotus"
});
