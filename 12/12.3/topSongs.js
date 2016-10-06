
var queryType = process.argv[2];
var mysql = require("mysql");
var inquirer = require('inquirer');
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: 'root',
	password: '',
	database: 'Top5000DB'
});

// need connection

switch (queryType){
	case "total":
		songsBy()
		break;
	
	case "repeatHitMakers":
		repeatHitMakers();
		break;
	
	case "dataRange":
		dataRange();
		break;
	
	case "favSong":
		favSong();
		break;

	// case "addGenre":
	// 	addGenre();
	// 	break;
	
	default: 
		console.log("Choose a function, holmes.");
		break;
}

// A query which returns all data for songs sung by a specific artist

function songsBy(){
	
inquirer.prompt([{
           name: "artist",
           message: "Who's songs do you want to see?"
       }]).then(function(answers){

	       	connection.query('SELECT * FROM Top5000 WHERE artist=?', [answers.artist], function(err, res) {
			    for (var i = 0; i < res.length; i++) {
			        console.log(res[i])
			        // console.log(res[i].position + " | " + res[i].artist + " | " + res[i].song + " | " + res[i].release + " | " + res[i].1rating + " | " + res[i].2rating + " | " + res[i].3rating + " | " + res[i].4rating + " | " + res[i].5rating);
			    }
			})
	  })
}

// A query which returns all artists who appear within the top 5000 more than once

function repeatHitMakers(){
	connection.query("SELECT * FROM Top5000 GROUP BY artist HAVING count(*) > 1", function(err, res) {	
	        console.log(res)
	        // console.log(res[i].position + " | " + res[i].artist + " | " + res[i].song + " | " + res[i].release + " | " + res[i].1rating + " | " + res[i].2rating + " | " + res[i].3rating + " | " + res[i].4rating + " | " + res[i].5rating);
	})
}

// A query which returns all data contained within a specific range

function dataRange(){
	inquirer.prompt([{
           type: "list",
           name: "range",
           choices: ['Year', 'Position'],
           message: "What kind of range do you want?"
       },{
           name: "start",
           message: "Where do you want to start?"
   		},{
           name: "end",
           message: "Where do you want to end?"
   		}]).then(function(answers){

	       	connection.query('SELECT * FROM Top5000 WHERE ? BETWEEN ? AND ?', [answers.range, answers.start, answers.end], function(err, res) {
			    for (var i = 0; i < res.length; i++) {
			        
			    	console.log(res[i])
			        // console.log(res[i].position + " | " + res[i].artist + " | " + res[i].song + " | " + res[i].release + " | " + res[i].1rating + " | " + res[i].2rating + " | " + res[i].3rating + " | " + res[i].4rating + " | " + res[i].5rating);
			    }
			})
	  })
}

// A query which searches for a specific song in the top 5000 and returns the data for it

function favSong(){
	inquirer.prompt([{
           name: "song",
           message: "What song info do you want to see?"
       }]).then(function(answers){

	       	connection.query('SELECT * FROM Top5000 WHERE song=?', [answers.song], function(err, res) {
			    for (var i = 0; i < res.length; i++) {
			        console.log(res[i])
			        // console.log(res[i].position + " | " + res[i].artist + " | " + res[i].song + " | " + res[i].release + " | " + res[i].1rating + " | " + res[i].2rating + " | " + res[i].3rating + " | " + res[i].4rating + " | " + res[i].5rating);
			    }
			})
	  })
}

// BONUS: Update your application to add in a new column called genre which takes a specific song within the top 5000 charts, calls a music API like Spotify, and then updates that song's row to include the genre found.