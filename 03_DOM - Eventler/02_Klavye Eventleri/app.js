// Klavye Eventleri

/* // Keypress


document.addEventListener("keypress", run);

function run(e) {
  //   console.log(e.which);      //Hangi tuşa basıldığını gösterir. (ASCII Şeklinde)
  console.log(e.key);
}

// Keydown

document.addEventListener("keydown", run);

function run(e) {
  console.log(e.key);
}


// Keyup

document.addEventListener("keyup", run);

function run(e) {
  console.log(e.key);
} 

*/

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);

function changeText(e) {
  header.textContent = e.target.value;
  //   console.log(e.target.value);
}
