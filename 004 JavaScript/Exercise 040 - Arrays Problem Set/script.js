// Arrays Problem Set


/*
*   1. 	Write a funtion printReverse() that takes an array as an argument
* 		and prints out the elements in the array in reverse order.
*			! Don't actualy reverse the array itself
*
*			Test:   ["a", "b", "c"]
*					[3, 6, 2, 5]
*/


function printReverse(arr) {
	for(var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

printReverse(["a", "b", "c"]);
printReverse([3, 6, 2, 5]);



/*
*	2.	Write a funtion isUniform() which takes an array as an argument
*		and returns true if all elements in the array are identical.
*
*			Test:   [1, 1, 1, 1]
*					[2, 1, 1, 1]
*					["a", "b", "p"]
*					["b", "b", "b"]
*
*/


function isUniform(arr) {
	var first = arr[0];

	for(var i = 1; i < arr.length; i++) {
		if(arr[i] !== first) {
			return false;
		}
	}
	return true;
}

console.log(isUniform([1, 1, 1, 1]));
console.log(isUniform([2, 1, 1, 1]));
console.log(isUniform(["a", "b", "p"]));
console.log(isUniform(["b", "b", "b"]));



/*
*	3.	Write a function sumArray() that accepts a array of numbers and returns
*		the sum of all number in the array.
*			
*			Test:   [1, 2, 3]
*					[10, 3, 10, 4]
*					[-5, 100] 
*
*/


function sumArray(arr) {
	var total = 0;
	
	arr.forEach(function(element) {
		total += element
	});

	return total;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([10, 3, 10, 4]));
console.log(sumArray([-5, 100]));



/*
*	4. 	Write a function max() that accepts an array of numbers and returns
*		the maximum number in the array
*			
*			Test:   [1, 2, 3]
*					[10, 3, 10, 4]
*					[-5, 100] 
*
*/


function max(arr) {
	var max = arr[0];

	for(var i = 1; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

console.log(max([1, 2, 3]));
console.log(max([10, 3, 10, 4]));
console.log(max([-5, 100]));
