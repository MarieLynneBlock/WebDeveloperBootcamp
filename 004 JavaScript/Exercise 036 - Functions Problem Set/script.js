// Problem 1: isEven()

	// Explicit
function isEven(num) {
	if(num % 2 === 0) {
		return true
	}
	else
		return false
}

	// Short
function isEven(num) {
	return num % 2 === 0;
}


// test cases
isEven(4);
isEven(21);
isEven(68);
isEven(333);



// Problem 2: factorial()

	// Option 1 ->

function factorial(num) {

		// define a result variable
	var result = 1;
		// calculate factorial and store value in result
	for(var i = 2; i <= num; i++) {
		result *= i;
	}
		// return the result variable
	return result
}


	// Option 2 <-

function factorial(num) {

	if(num === 0) {
		return 1;
	}

	var result = num;
	for(var i = num-1; i >= 1; i--) {
		result *= i;
	}
	return result
}


// test cases
factorial(5);
factorial(2);
factorial(10);
factorial(0);



// Problem 3: kebabToSnake()

function kebabToSnake(str) {
		//replace all '-' with "_"
	var newStr = str.replace(/-/g , "_");
		//return str
	return newStr;
}


// test cases
kebabToSnake("hello-world");
kebabToSnake("dogs-are-awesome");
kebabToSnake("blah");