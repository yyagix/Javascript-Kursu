const form = document.getElementById("film-form");
const titleELement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// UI Objesini Başlatma

const ui = new UI();

// Storage Objesi Üretme

const storage = new Storage();

// Tüm Eventleri Yükleme

eventListeners();

function eventListeners() {
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        films.forEach(function(film){
            ui.addFilmToUI(film);
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
        ui.displayMessages("Tüm Alanları Doldurun!", "danger");
        
    }
    else{
        // Film Ekleme
        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm);        // UI'ye Film Ekleme
        storage.addFilmToStorage(newFilm); // Storage'a Film Ekleme
        ui.displayMessages("Film Eklendi!", "success");
    }

    ui.clearInputs(titleELement,directorElement,urlElement);

    e.preventDefault();
}

function deleteFilm(e) {
    if(e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("Film Silindi!", "warning");
    }
}

function clearAllFilms(e) {

    if(confirm("Tüm Filmler Siilinecektir! Emin Misiniz?")){

    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
    
    ui.displayMessages("Tüm Filmler Silindi!", "danger");
}

}

