var searchButton = document.querySelector("form button");

var favoriteButton = document.querySelectorAll("section div article button");
var favoriteBoekenlijst = document.querySelector("nav ul li a:nth-child(2)");
var favoriteBoekenlijstMobile = document.querySelector("nav ul li a:nth-child(1) i");

function search() {
  window.location="detailpagina.html";
}

function favorite(current) {
    current.currentTarget.classList.toggle("favorite-clicked");
    favoriteBoekenlijst.classList.toggle("hidden1")
    favoriteBoekenlijstMobile.classList.toggle("hidden1")
}

for (var i = 0; i < favoriteButton.length; i++) {
    favoriteButton[i].addEventListener("click", favorite);
}


searchButton.addEventListener("click", search);
