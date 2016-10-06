// Create two variables. Both variables should be numbers representing the cost of an item for sale (e.g. 4.99)

var price1 = 4.99;
var price2 = 11.49;

// Define a function that takes in two parameters — the two variables you've created will be the arguments — and returns their sum.

function add(cost1, cost2){
	var sum = cost1 + cost2;
	return sum;
}

// Define another function that takes in one parameter — a number — and returns that value increased by 10%.

function tax(total){
	var sumTax = total*1.1;
	return sumTax;
}

var sum = add(price1, price2);
var sumTax = tax(sum);
console.log(sumTax.toFixed(2));

// Pass the variables you created to the first function and then pass the resulting sum through the second function. Console log the result.




