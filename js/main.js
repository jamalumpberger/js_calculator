// The Calculator

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(x) {
	var squared = Math.pow(x,2);
    console.log("The result of squaring the number " + x + " is " + squared + ".");
    return squared;
}

squareNumber(10);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(y) {
	var half = y/2;
	console.log("Half of " + y + " is " + half + ".");
	return half;
}

halfNumber(10);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(a,b) {
	var percent = (a/b)*100
	console.log(a + " is " + percent + "% of " + b + ".");
	return percent;
}

percentOf(5,7);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(r) {
	var area = (Math.pow(r,2)*Math.PI).toFixed(2);
	console.log("The area of a circle with radius " + r + " is " + area + ".");
	return area;
}

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

function calculator(num) {
	var h = halfNumber(num);
	var s = squareNumber(h);
	var c = areaOfCircle(s);
	var p = percentOf(c,s);
}

calculator(100);