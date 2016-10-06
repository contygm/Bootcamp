
var name = "";
var role = "";
var startDate = 0;
var rate = 0;

var config = {
    apiKey: "AIzaSyCNrhVYfQ_PUQUsbTZdxzY3gRQs7xIz8n0",
    authDomain: "employee-data-management-cd984.firebaseapp.com",
    databaseURL: "https://employee-data-management-cd984.firebaseio.com",
    storageBucket: "employee-data-management-cd984.appspot.com",
  };
  firebase.initializeApp(config);

var database = firebase.database();

$(document).on("click",'#submit', function(event){
	event.preventDefault();

	name = $('#name').val().trim()
	role = $('#role').val().trim()
	startDate = $('#startDate').val().trim()
	rate = $('#rate').val().trim()

	console.log(name)
	console.log(role)
	console.log(startDate)
	console.log(rate)

	database.ref().push({
		name: name,
		role: role,
		start_Date: startDate,
		rate: rate,
	})
	
})