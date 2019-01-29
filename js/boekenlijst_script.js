var favoriteButton = document.querySelectorAll("section div article > button");
var readButton = document.querySelector("main section div article div:last-of-type button");


for (var i = 0; i < favoriteButton.length; i++) {
    favoriteButton[i].addEventListener("click", favorite);
}

function favorite(current) {
    current.currentTarget.classList.toggle("favorite-clicked");
}

readButton.addEventListener("click", function() {
   window.location="paranoia.html";
});
