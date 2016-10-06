

var inquirer = require('inquirer');
var count = 0;

function madLib(){
	this.adjs = [],
	this.nouns = [],
	this.verbs = [],
	this.story = ["A","noun","verb", "across the street holding a", "adj","noun", "in its mouth."]
}

function getWords(){
	if (count < 4){
		inquirer.prompt([{
           name: "noun1",
           message: "Gimme a noun!"
       }, {
           name: "noun2",
           message: "Gimme another noun!"
       }, {
           name: "verb",
           message: "Gimme a past tense verb!"
       }, {
           name: "adjective",
           message: "Gimme an adjective!"
       }]).then(function(answers) {

           var newLib = new madLib();

           newLib.nouns.push(answers.noun1);
           newLib.nouns.push(answers.noun2);
           newLib.verbs.push(answers.verb);
           newLib.adjs.push(answers.adjective);

           console.log(newLib);

           var nounCnt = 0;

           for (var n = 0; n < newLib.story.length ;n++){
           		console.log("4");
           		if(newLib.story[n] == "noun"){
           			newLib.story[n] = newLib.nouns[nounCnt];
           			nounCnt++;
           		} else if(newLib.story[n] == "verb"){
           			newLib.story[n] = newLib.verbs[0];
           		} else if(newLib.story[n] == "adj"){
           			newLib.story[n] = newLib.adj[0];
           		}

           }
          
           console.log("5");
           console.log(newLib.story);
       })
	}
}

getWords();

// n ----    2    4
// v --      1
// a --- 9   1

// Your inquirer prompts should be contained 
// within a recursive function with a callback parameter,
// which we will use to print out our final story
// Yesterday, it had a", "adj","noun","on its back and tomorrow, it will", "verb", "a", "adj", "noun","."

