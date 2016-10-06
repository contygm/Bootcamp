
// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code. 
// ============================================================================================



var input = process.argv;
var points = [];

for (var i=2; i < input.length; i++){
	points.push(parseFloat(input[i]))
}

points.sort(function(a, b){return a - b});
console.log(points)

