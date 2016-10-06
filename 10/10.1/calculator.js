
var mathType = process.argv[2];
var a = parseInt(process.argv[3]);
var b = parseInt(process.argv[4]);

switch (mathType) {
	case "add":
		console.log(a+b);
		break;
	
	case "subtract":
		console.log(a-b);
		break;

	case "multiply":
		console.log(a*b);
		break;

	case "divide":
		console.log(a/b);
		break;

	case "remainder":
		console.log(a%b);
		break;

	case "exp":
		console.log(Math.pow(a,b));
		break;

	case "algebra":
		
		console.log(process.argv[3][1]);
		break;

	default: 
		console.log("Choose a function and your arguments.");
		break;
}

