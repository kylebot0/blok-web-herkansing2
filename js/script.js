var navHide = document.getElementById("nav-btn");
var li = document.querySelectorAll("li");
var img = document.querySelector("img");
var header = document.querySelector("nav");
var button = document.querySelector("#nav-btn");
var toggleBoolean = false;

navHide.addEventListener("click", function() {
  if (toggleBoolean === false) {
    header.classList.add("nav-hide");
    button.classList.add("nav-btn-hidden");
    li[1].classList.add("hide");
    li[2].classList.add("hide");

    img.classList.add("hide");
    button.classList.add("rotate");
    toggleBoolean = !toggleBoolean;
  } else {
    header.classList.remove("nav-hide");
    button.classList.remove("nav-btn-hidden");
    li[1].classList.remove("hide");
    li[2].classList.remove("hide");

    img.classList.remove("hide");
    button.classList.remove("rotate");
    toggleBoolean = !toggleBoolean;
  };
});
