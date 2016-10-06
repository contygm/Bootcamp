function CreateChar (name, profession, gender, age) {
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = Math.floor(Math.random() * 100) + 50;
	this.hitPoints = Math.floor(Math.random() * 250) + 125;
	this.printStats = function (){
		console.log(this.name);
		console.log("strength ", this.strength);
		console.log("hitPoints ", this.hitPoints);
		console.log("age ", this.age);
		console.log("---------")
	}
	this.isAlive = function(){
		if (this.hitPoints <= 0 || this.strength <= 0){
		console.log(this.name + " is dead.")
		}
	}
	this.attack = function(opp){
		opp.hitPoints -= this.hitPoints;
		console.log(this.name, " attacked ", opp.name);
		console.log(this.printStats());
		console.log(opp.printStats());
	}
	this.levelUp = function (){
		this.age++;
		this.strength += 5;
		this.hitPoints += 25;
		console.log(this.name, " leveled up.");
		console.log(this.printStats());
	}
}

var xena = new CreateChar("Xena", "Warrior Princess", "Woman", 27);
var pharaoh = new CreateChar("Pharaoh CleoPawTra", "Fat Cat", "daFemale", 32);

xena.printStats();
pharaoh.printStats();

xena.attack(pharaoh);

xena.levelUp();

