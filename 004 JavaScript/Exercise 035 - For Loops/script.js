// 1. Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19");

for (var i = -10; i < 20; i++) {
	console.log(i);
}


// 2. Print all even numbers between 10 and 40

	// First Option
console.log("Print all even numbers between 10 and 40 - First Option");

for (var i = 10; i <= 40; i+=2) {
	console.log(i);
}

	// Second Option
console.log("Print all even numbers between 10 and 40 - Second Option");

for (var i = 10; i <= 40; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}


// 3. Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");

for (var i = 300; i <= 333; i++) {
	if (i % 2 !== 0) {
		console.log(i);
	}
}


// 4. Print all numbers divisible by 5 and 3 between 5 and 50
console.log("Print all numbers divisible by 5 and 3 between 5 and 50");

for (var i = 5; i <= 50; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(i);
	}
}