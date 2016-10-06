// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing. 
// The question set should include at least one:

//  	- Basic input, 
//		- Password, 
//		- List, 
//		- Checkbox, 
//		- and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

// Load the NPM Package inquirer
var inquirer = require('inquirer');

// Create a "Prompt" with a series of questions.
inquirer.prompt([

	// Here we create a basic text prompt.
	{
		type: "input",
		message: "What is your username?",
		name: "username"
	},

	// Here we create a basic password-protected text prompt.
	{
		type: "password",
		message: "Set strong password. No weak sauce allowed",
		name: "password"
	},

	// Here we give the user a list to choose from.
	{
		type: "list",
		message: "Which dessert to you choose?",
		choices: ["Chocolate", "Ice Cream", "Cake", "Candy", "No dessert (lame)"],
		name: "dessert"
	},

	{
		type: "checkbox",
		message: "Which dessert toppings do you like?",
		choices: ["Sprinkles", "Whipped Cream", "Icing", "Chocolate Syrup", "No dessert toppins(lame)"],
		name: "topping"
	},

	// Here we ask the user to confirm.
	{
		type: "confirm",
		message: "Are you human?",
		name: "confirm",
		default: true

	}

	{
		type: "password",
		message: "Want to see your answers? Enter your password.",
		name: "response"
	},


]).then(function (user) {

	if (user.response == user.password) {
		console.log("==============================================");
		console.log("");

		console.log("Your dessert: " + user.dessert)
		console.log("Your topping: " + user.topping)

		console.log("");
		console.log("==============================================");
	} else {
		console.log("way to forget your password")
	};


})