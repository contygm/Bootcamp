// Initialize Firebase (YOUR OWN APP)

var config = {
		apiKey: "AIzaSyCh4CcClBJcE_1JKnDh96Fl2tTHm8X1x4Y",
    authDomain: "yoyoyowassup-2186c.firebaseapp.com",
    databaseURL: "https://yoyoyowassup-2186c.firebaseio.com",
    storageBucket: "yoyoyowassup-2186c.appspot.com",
	};
firebase.initializeApp(config);

// Set Initial Counter 
var initialValue = 100;
var clickCounter = initialValue;	

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.

	firebase.database().ref().on("value", function(snapshot){

		// Print the initial data to the console.
		console.log(initialValue);

		// Change the html to reflect the initial value.

		$("#clickValue").html(initialValue);

		// Change the clickcounter to match the data in the database
		clickCounter = snapshot.val().clickCount;

		// Log the value of the clickCounter
		console.log(clickCounter);

		// Change the HTML Value
		$("#clickValue").html(snapshot.val().clickCount);
	},  function (errorObject) {

		// let's you know there's an error
	  	console.log("The read failed: " + errorObject.code);
	

// If any errors are experienced, log them to console. 

	});

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#clickButton").on("click", function() {

	// Reduce the clickCounter by 1
	clickCounter--;


	// Alert User and reset the counter
	if (clickCounter < 0){
		alert("You wasted 100 clicks of your life!")
		clickCounter = initialValue;
	}


	// Save new value to Firebase
	firebase.database().ref().set({
			clickCount: clickCounter
		});


	// Log the value of clickCounter
	console.log(clickCounter)

});

// Whenever a user clicks the restart button
$("#restartButton").on("click", function() {

	// Set the clickCounter back to initialValue
	clickCounter = initialValue;

	
	// Save new value to Firebase
	firebase.database().ref().set({
			clickCount: clickCounter
		});



	// Log the value of clickCounter
	console.log(clickCounter)


	// Change the HTML Values
	$("#clickValue").html(clickCounter);


});
