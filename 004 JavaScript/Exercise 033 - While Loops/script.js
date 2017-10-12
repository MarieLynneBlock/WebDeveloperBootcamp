// 1. Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19");


var counter = -10;

while(counter < 20) {
	console.log(counter);
	counter++;
}


// 2. Print all even numbers between 10 and 40

	
	// Option 1
	console.log("Print all even numbers between 10 and 40 - Option 1");

var counter = 10;

while(counter <= 40) {
	console.log(counter);
	counter+=2;
}

	// Option 2
	console.log("Print all even numbers between 10 and 40 - Option 2");

var counter = 10;

while(counter <= 40) {
	if(counter % 2 === 0) {
	console.log(counter);
	}
	counter+=1;
}


// 3. Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");

var counter = 300;

while(counter <= 333) {
	if(counter % 2 !== 0) {
		console.log(counter);
	}
	counter++;
}


// 4. Print all numbers divisible by 5 and 3 between 5 and 50
console.log("Print all numbers divisible by 5 and 3 between 5 and 50");

var counter = 5;

while(counter < 51){
	if(counter % 5 === 0 && counter % 3 === 0) {
	console.log(counter);
	}
	counter++;
}
