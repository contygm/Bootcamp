

var inquirer = require('inquirer');
var starters = [];
var reserves = [];

function coinFlip() {
	// 0 = heads, 1 = tails
    return (Math.floor(Math.random() * 2) == 0);
}

function Player(name, position){
	this.name = name;
	this.position = position;
	this.offense = Math.floor(Math.random() * 10) + 1;
	this.defense = Math.floor(Math.random() * 10) + 1;
	this.goodGame = function(){
		if(coinFlip()){
			this.offense += 2;
		}
	}
	this.badGame = function(){
		if(!coinFlip()){
			this.offense -= 2;
		}
	}
	this.printStats = function(){
		console.log("Name: " + this.name);
		console.log("Position: " + this.position);
		console.log("Offense: " + this.offense);
		console.log("Defense: " + this.defense + "\n");
	}
}

var playerCount = 1;

var makeTeam = function() {
   if (playerCount <= 5) {
       // get stats
       

       inquirer.prompt([{
           name: "name",
           message: "What is your player's name?"
       }, {
           name: "position",
           message: "What is your player's position?"
       } ]).then(function(answers) {
           var newPlayer = new Player(answers.name, answers.position);
           console.log("\nStarter #" + playerCount)
           newPlayer.printStats();
           starters.push(newPlayer);
           playerCount++;
           makeTeam(); 

       })
   // reserves
   } else if (playerCount > 5 && playerCount < 9 ){
       inquirer.prompt([{
           name: "name",
           message: "What is your player's name?"
       }, {
           name: "position",
           message: "What is your player's position?"
       } ]).then(function(answers) {
           var newPlayer = new Player(answers.name, answers.position);
           console.log("Reserve #" + playerCount%5 + "\n")
           newPlayer.printStats();
           reserves.push(newPlayer);
           playerCount++;
           makeTeam();
       }) 
   } else {
   		console.log("Time to Play")
   }
}

makeTeam();


function playGame(){
	for (var i = 0; i < 10; i++){
		var num1 = Math.floor(Math.random() * 50) + 1;
		var num2 = Math.floor(Math.random() * 50) + 1;
		var teamOff = starters[0].offense + 
			starters[1].offense +
			starters[2].offense +
			starters[3].offense +
			starters[4].offense

		var teamDef = starters[0].defense +
			starters[1].defense +
			starters[2].defense +
			starters[3].defense +
			starters[4].defense;
		if (num1 < teamOff) {
			score++;
		}
		if (num2 > teamDef){
			score--;
		}
// After the score has been changed, 
//can subs players within the starters array with any of those players within the subs array.
		inquirer.prompt([{
           name: "wanna_sub",
           message: "Would you like to sub your players?"
       	}, {
           name: "wanna_see",
           message: "Would you like to see your subs and starters first?"
        }]).then function(answers){
			if (answers.wanna_see)
        }
	}
}


// If your score is positive after the game has finished
	//run goodGame() for all of those players currently within the starters array.
//If your score is negative after the game has finished
	//run badGame() for all of those players currently within your starters array. 
//If the score is equal to zero
	//then do nothing.

// Prompts the player if they would like to play again: 
	//runs playGame from the start once more if they do 
	//ends the program if they don't.
