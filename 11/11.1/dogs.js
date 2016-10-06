 var dogs = {
 	raining: true,
 	noise: "Woof!",
 	makeNoise: function (){
 		if(dogs.raining) {
 			console.log(this.noise);
 		}
 	}
 }

 var cats = {
 	raining: false,
 	noise: "Meow!",
 	makeNoise: function(){
 		if (cats.raining){
 			console.log(this.noise);
 		}
 	}
 }

  function massHysteria (){
  	if (cats.raining == true && dogs.raining == true){
  		console.log("DOGS AND CATS LIVING TOGETHER MASS HYSTERIA");
  		console.log("WOOF MEOW WOOF MEOW");
  	} else {
  		dogs.makeNoise();
  		cats.makeNoise();
  	}
  }

  massHysteria();

  cats.raining = true;
  console.log("changed cats.raining to true to prove I'm awesome")

  massHysteria();