// Yeni Element Oluşturma

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com"
newLink.target = "_blank";

/*
// Text Content

cardbody.textContent = "asasa" // Hepsi silinir ve sadece yazı yazar.


// Text Node

const text = document.createTextNode("Naber");
cardbody.appendChild(text);     // Hepsi silinmez en sonuna yazar.
*/

newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));
cardbody.appendChild(newLink);