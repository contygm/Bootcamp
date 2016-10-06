// Initialize Firebase

var config = {
     apiKey: "AIzaSyBfcpAxRLzEE_jVgQWzf0gaJWr7vYoOop8",
    authDomain: "code-bay-e42a6.firebaseapp.com",
    databaseURL: "https://code-bay-e42a6.firebaseio.com",
    storageBucket: "code-bay-e42a6.appspot.com",
  };
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-("

var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// 
// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot){


	// If Firebase has a highPrice and highBidder stored (first case)
	if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()){

		// Set the initial variables for highBidder equal to the stored values.
		highBidder = snapshot.val().highBidder;
		highPrice = snapshot.child("highPrice").val();


		// Change the HTML to reflect the initial value
		$('#highestBidder').html(highBidder);
		$('#highestPrice').html(highPrice);


		// Print the initial data to the console.
		console.log(highBidder);
		console.log(highPrice);


	// Else Keep the initial variables for highBidder equal to the initial values
	} else {
		snapshot.child("highBidder") = initialBid;
		snapshot.child("highPrice") = initialBidder;
		console.log(snapshot.child("highBidder"));
	}

},

// If any errors are experienced, log them to console. 

function (errorObject) {

		// let's you know there's an error
	  	console.log("The read failed: " + errorObject.code);
});


// --------------------------------------------------------------

// Whenever a user clicks the click button

$("#submitBid").on("click", function(){


	// Get the input values
	var name = $('#bidderName').val().trim();
	var bid = $('#bidderPrice').val().trim();
	var currentHighest = $('#highestPrice').html();

	// Log the Bidder and Price (Even if not the highest)
	console.log(name);
	console.log(bid);

	// If Then statements to compare against previous high bidder
	if (bid > currentHighest) {



		// Alert that they are High Bidder


		// Save the new price in Firebase


		// Log the new High Price


		// Store the new high price and bidder name as a local variable (could have also used the firebase variable)


		// Change the HTML to reflect the new high price and bidder

	// Else tell user their bid was too low via alert
	} else {
		alert("Your bid is too low!");
	}

	// Return False to allow "enter"
	return false;

});
