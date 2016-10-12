// Dependencies
// ===========================================================
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Data
// ===========================================================
var characters = {
    yoda: {
        name: 'Yoda',
        role: 'Jedi Master',
        age: 900,
        forcePoints: 2000
    },
    darthmaul: {
        name: 'Darth Maul',
        role: 'Sith Lord',
        age: 200,
        forcePoints: 1200
    },
    obiwankenobi: {
        name: 'Obi Wan Kenobi',
        role: 'Jedi Master',
        age: 55,
        forcePoints: 1350
    }
};

// Routes
// ===========================================================
app.get('/', function (req, res) {
	res.send('Welcome to the Star Wars Page!');
});

app.get('/:characters', function (req, res) {

	var chosen = req.params.characters,
        chosenCharacter = characters[chosen];

    if (chosenCharacter) {
        return res.json(chosenCharacter);
    }

	res.send('No character found');
	console.log(chosen);
});

// Listener
// ===========================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});