const form = document.getElementById("film-form");
const titleELement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// UI Objesini Başlatma

const ui = new UI();

// Tüm Eventleri Yükleme

eventListeners();

function eventListeners() {
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        films.forEach(function(film){
            UI.addFilmToUI(film);
        });
    });

    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e) {
    const title = titleELement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    
    if(title === "" || director === "" || url === "") {
        UI.displayMessages("Tüm Alanları Doldurun!", "danger");
        
    }
    else{
        // Film Ekleme
        const newFilm = new Film(title,director,url);
        UI.addFilmToUI(newFilm);        // UI'ye Film Ekleme
        Storage.addFilmToStorage(newFilm); // Storage'a Film Ekleme
        UI.displayMessages("Film Eklendi!", "success");
    }

    UI.clearInputs(titleELement,directorElement,urlElement);

    e.preventDefault();
}

function deleteFilm(e) {
    if(e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Film Silindi!", "warning");
    }
}

function clearAllFilms(e) {

    if(confirm("Tüm Filmler Siilinecektir! Emin Misiniz?")){

    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
    
    UI.displayMessages("Tüm Filmler Silindi!", "danger");
}

}

