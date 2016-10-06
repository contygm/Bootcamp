var mysql = require("mysql");
var prompt = require('prompt');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: 'root',
	password: '',
	database: 'musicPlaylistDB'
});

connection.connect(function(err){
	if (err){
		throw err;
	}
	console.log("connect as id", connection.threadId);
})

// Create ex

var motions = function(){
	create: function(title, artist, genre){
		connection.query("INSERT INTO musicPlaylist (title,artist,genre) VALUES (?,?,?)", [title, artist, genre], function(err, results){
			if (err) throw err;
		})
	}
	read: function(){
		connection.query("SELECT * FROM musicPlaylist",function(err, results){
			if (err) throw err;

			console.log(results);
		})
	}

	update: function(column, target){
		connection.query("UPDATE musicPlaylist SET ? WHERE ?", [{genre: "K-POP"}, {genre:"K-pop"}], function(err, results){
			if (err){
				throw err;
			}
		})
	}

	delete: function(column, target){
		connection.query("DELETE FROM musicPlaylist WHERE ?",[{column: target}], function(err, results){
			if (err) throw err;
	
		})
	}
}



// return specific genre
// connection.query("SELECT * FROM musicPlaylist WHERE genre=?", ['Dance'], function(err, results){
// 	if (err)
// 		throw err;
// 	}
	
// 	for (var n = 0; n < results.length; n++){

// 		console.log(results[n].title);
// 	}
	
// })

