// Event Bubbling

/*
document.querySelector(".container").addEventListener("click", function () {
  console.log("Div Container");
});

document.querySelector(".card.row").addEventListener("click", function () {
  console.log("Card Row");
});

document.querySelectorAll(".card-body")[1].addEventListener("click", function () {
    console.log("Card Body");
});
*/

// Event Capturing veya Delegration

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click", run);

function run(e) {
  if (e.target.className === "fa fa-remove") {
    console.log("Silme İşlemi");
  }
  if (e.target.id === "filter") {
    console.log("fltreleme");
  }
  if (e.target.id === "clear-todos") {
    console.log("silmetask");
  }
  // console.log(e.target);
}
