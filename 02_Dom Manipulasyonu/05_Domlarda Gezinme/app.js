let value;

const todolist = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value = todolist;
value = todo;
value = cardrow;

// Child Nodes  -   Text Dahil

value = todolist.childNodes;
value = todolist.childNodes[0];

// Children     -   Element

value = todolist.children;
value = todolist.children[todolist.children.length - 1];
value = todolist.children[2].textContent = "Değişti";

value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Burası da değişti";

value = todolist;

value = todolist.firstElementChild;
value = todolist.lastElementChild;
value = todolist.children.length;
value = todolist.childElementCount;

value = cardrow;
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement;

// Element Kardeşleri

value = todo;

value = todo.previousElementSibling;
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;

value = todo.previousElementSibling.previousElementSibling;

console.log(value);
