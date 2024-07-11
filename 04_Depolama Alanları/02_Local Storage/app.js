// Local Storage

// Set Item

localStorage.setItem("hareket", "burpee");
localStorage.setItem("tekrar", 50);

// Get Item

const value = localStorage.getItem("tekrar");

console.log(value);
console.log(typeof value);

// Clear Local Storage

localStorage.clear();

if (localStorage.getItem("sport") === null) {
  console.log("Sorguladığınız veri bulunmuyor.");
} else {
  console.log("Sorguladığınız veri bulunuyor.");
}

// Local Storage - Array Yazma

const gorev = ["Todo 1", "Todo 2", "Todo 3"];

localStorage.setItem("gorev", JSON.stringify(gorev));

const todo = JSON.parse(localStorage.getItem("gorev"));

console.log(todo);

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addTodo);

function addTodo(e) {
  const value = todoInput.value;

  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(value);

  localStorage.setItem("todos", JSON.stringify(todos));

  e.preventDefault();
}
