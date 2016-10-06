

function DigitalPal(name){
	this.name = name;
	this.hungry = false;
	this.sleepy = false;
	this.bored = true;
	this.age = 0;
	this.feed = function(){
		if (this.hungry){
			console.log("That was yummy!");
			this.hungry = false;
			this.sleepy = true;
		} else {
			console.log("No thanks! I'm full.");
		}
	}
	this.increaseAge = function(){
		this.age++;
		console.log("Happy Birthday to me! I am " + obj.age + " old!")
	} 
	this.sleep = function(){
		if (this.sleep){
			console.log("Zzzzz");
			this.sleepy = false;
			increaseAge();
		} else {
			console.log("No way! I'm not tired.");
		}
	}
	this.play = function(){
		if (this.bored){
			console.log("Yay! Let's play!");
			this.bored = false;
			this.hungry = true;
		} else {
			console.log("Not right now. Later?");
		}
	}
}



var Dog = new DigitalPal ("Spot");
Dog.outside = false;
Dog.bark = function(){
	console.log("Woof! Woof!")
};
Dog.goOutside = function(){
	if (!this.outside){
		console.log("Yay! I love the outdoors");
		this.outside = true;
		this.bark();
	} else {
		console.log("We're already outside though...");
	}
};
Dog.goInside = function(){
	if (this.outside){
		console.log("Do we have to? Fine...");
		this.outside = false;
	} else {
		console.log("I'm already inside...");
	}
}

Dog.bark();
Dog.goOutside();
Dog.goInside();

var Cat = new DigitalPal("Duckie");
Cat.HouseCondition = 100;
Cat.meow = function(){
	console.log("Meow! Meow!");
};
Cat.destroyFurniture = function(){
	this.HouseCondition -= 10;
	console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
	this.bored = false;
	this.sleepy = true;
	if (this.HouseCondition <= 0){
		return;
	}
};
Cat.buyNewFurniture = function(){
	this.HouseCondition += 50;
	console.log("Are you sure about that?");
}

Cat.meow();
Cat.destroyFurniture();
console.log(Cat.HouseCondition)
Cat.buyNewFurniture();
console.log(Cat.HouseCondition)







