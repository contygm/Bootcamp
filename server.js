

// ** Bonus **
// Generate the good / bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet!


var http = require('http');

//7000 = good; 7500 = bad
var PORT = 7000;
var PORT2 = 7500;

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
//takes two parameters: port and callback function 

server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server1 listening on: http://localhost:%s", PORT);
});

server.listen(PORT2, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server2 listening on: http://localhost:%s", PORT);
});

