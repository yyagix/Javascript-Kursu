const filterInput = document.getElementById("filte");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", submitForm);

function submitForm(e) {
  console.log("Submit Eventi");

  e.preventDefault();
}
/* filterInput.onfocus = function(){
    console.log("Naber");
} 

    filterInput.addEventListener("focus", function(e){
        console.log(e);
        console.log(e.type);
        console.log(e.target);
        console.log(e.target.placeholder);
        console.log(e.target.className);
    }); */

console.log(filterInput);
