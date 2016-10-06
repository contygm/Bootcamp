var mysql = require("mysql");
var inquirer = require('inquirer');
var topSongs = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: 'root',
	password: '',
	database: 'Top5000DB'
});

var topAlbums = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: 'root',
	password: '',
	database: 'Top3000DB'
});

topSongs.connect(function(err) {
    if (err) throw err;
    
})

topAlbums.connect(function(err) {
    if (err) throw err;
    
})


 var query = 'SELECT * FROM Top5000DB JOIN Top3000DB ON artist = artist';
    connection.query(query);
