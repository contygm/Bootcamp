

var fs = require('fs');

fs.readFile('bestShit.txt', "utf8", function(error, daShit){

		var splitShit = daShit.split(',');

		console.log(splitShit);

	});