function UI() {
    
}

UI.prototype.addFilmToUI = function(newFilm) {
    /*
    <tr>
        <td><img src="" class="img-fluid img-thumbnail"></td>
        <td></td>
        <td></td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
    */

    const filmList = document.getElementById("films");

    filmList.innerHTML += `<tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail "></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`;
}


UI.prototype.clearInputs = function(element1,element2,element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

UI.prototype.displayMessages = function(message,type) {
    /*
    <div class="alert alert-danger" role="alert">
        A simple danger alert—check it out!
    </div>
    */
    const cardBody = document.querySelector(".card-body");
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);

    setTimeout(function() {
        document.querySelector(".alert").remove();
    },2500);
}

UI.prototype.deleteFilmFromUI = function(element) {
    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllFilmsFromUI = function() {
    const filmList = document.getElementById("films");

    // filmList.innerHTML = "";     Birinci Yöntem

    while(filmList.firstElementChild !== null){
        filmList.firstElementChild.remove();
    }
}
