var elButton = document.querySelector(".btn");
var elButtonMenu = document.querySelector(".btn__menu");
var elButtonExit = document.querySelector(".btn__exit");
var elNav = document.querySelector(".nav__list"); 
// var elNav = document.querySelector(".nav__button");  


elButton.addEventListener("click", () => {
    elButtonMenu.classList.toggle("btn__menu--exit")
    elButtonExit.classList.toggle("btn__exit--menu")
    elNav.classList.toggle("nav__blok")
    // elNav.classList.toggle("nav__button")
})

