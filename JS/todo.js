var todos = [];

var input = prompt("What would you like to do?");

window.setTimeout(function () {
    while (input !== "quit") {
        //Add a new item
        if (input === "new") {
            addTodo();
        }
        //list items
        else if (input === "list") {
            listTodo();
        } else if (input === "delete") {
            deleteTodo();
        }
        input = prompt("What would you like to do?");
    }
    console.log("Thanks, for using our app! :) ");

    function listTodo() {
        todos.forEach(function (todo, i) {
            console.log("*****");
            console.log(i + ": " + todo);
        });

    }

    function addTodo() {
        var newTodo = prompt("Add an item to list");
        todos.push(newTodo);
        console.log("Item Added!");
    }

    function deleteTodo() {
        var index = prompt("Enter the number of an item to delete");
        todos.splice(index, 1);
        console.log("Item deleted!");
    }
}, 500);