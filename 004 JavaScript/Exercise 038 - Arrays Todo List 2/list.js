var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?")


while(input !== "quit") {

	// handle input
	if(input === "list") {
		console.log("**********")
		todos.forEach(function(todo,i) {
			console.log(i + ": " + todo);
		});
		console.log("**********")
}

	else if(input === "new") {
		// ask for new todo
		var newTodo = prompt("Enter new Todo");
		// add new todo to array
		todos.push(newTodo);
		console.log("Added Todo");
}

	else if (input === "delete") {
		// ask for indew of todo to be deleted
		var index = prompt("Enter index of todo to delete");
		// Delete that todo
		todos.splice(index, 1);
		console.log("Deleted Todo");
}


	// ask again for new input
	input = prompt("What would you like to do?")

}

console.log("OK. You Quit the App.")