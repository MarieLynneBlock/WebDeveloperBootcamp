// Upgrade first "architecture": Loop is a little bit long, make it into separate functions

var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?")


while(input !== "quit") {

	// handle input
	if(input === "list") {
		listTodos();
}

	else if(input === "new") {
		addTodo();
}

	else if (input === "delete") {
		deleteTodo();
}

	// ask again for new input
	input = prompt("What would you like to do?")

}

console.log("OK. You Quit the App.")



function listTodos() {
	console.log("**********")
	todos.forEach(function(todo,i) {
		console.log(i + ": " + todo);
	});
	console.log("**********")
}


function addTodo() {
	// ask for new todo
	var newTodo = prompt("Enter new Todo");
	// add new todo to array
	todos.push(newTodo);
	console.log("Added Todo");
}


function deleteTodo() {
	// ask for indew of todo to be deleted
	var index = prompt("Enter index of todo to delete");
	// Delete that todo
	todos.splice(index, 1);
	console.log("Deleted Todo");
}



