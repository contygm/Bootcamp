var fs = require('fs');
var floatNums = [];
var mathType = process.argv[2];
var sum = 0;

fs.readFile('bank.txt', "utf8", function(error, nums){

		var splitNums = nums.split(',');

		for (var i = 0; i < splitNums.length; i++){
			var temp = parseFloat(splitNums[i]);
			floatNums.push(temp);
		}

		switch (mathType){
			case "total":
				addAll()
				break;
			
			case "deposit":
				depoz();
				break;
			
			case "withdraw":
				wDraw();
				break;
			
			case "lotto":
				lot();
				break;
			
			default: 
				console.log("Choose a function and your arguments.");
				break;
		}

	});

function addAll (){
	var tempSum = 0;
	for (var i = 0; i < floatNums.length; i++){
			tempSum = tempSum + floatNums[i];
		}
	sum = tempSum;
	console.log(sum);
};

function depoz (){
	var added = ", " + process.argv[3];
	fs.appendFile('bank.txt', added, "utf8");
}

function wDraw (){
	var subtract = ", -" + process.argv[3];
	fs.appendFile('bank.txt', subtract, "utf8");
}

function lot (){
	var subtract = ", -1";
	fs.appendFile('bank.txt', subtract, "utf8");

	var lotNum = Math.floor(Math.random() * 30) + 1 

	if (lotNum = 23){
		var added = ", 10000";
		fs.appendFile('bank.txt', added, "utf8");
	}

}
