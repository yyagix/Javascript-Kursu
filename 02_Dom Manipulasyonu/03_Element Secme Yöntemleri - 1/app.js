// Element'i Id'ye Göre Seçme

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// Element'i Class'a Göre Seçme

element = document.getElementsByClassName("list-group-item")[0];
element = document.getElementsByClassName("card-header");

// Element'i Tag'e Göre Seçme

element = document.getElementsByTagName("div");

// Query Selector - Css Selector - Tek Bir Element -İlk Bulduğu Elementi İşleme Sokar - Id için mantıklı

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item");

element = document.querySelector("li");
element = document.querySelector("div");

// Query Selector All - Tüm Elementleri Seçer

element = document.querySelectorAll(".list-group-item");

element.forEach(function (el) {
  console.log(el);
});

// console.log(element);
