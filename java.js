window.addEventListener("load", pageReady);
function pageReady(){
    console.log("all loaded");
}
let backGround = document.querySelector ("div");
let startAnim = document.querySelector(".start");
startAnim.addEventListener("click", startAnimations);
function startAnimations(){
    console.log("next scene please");
    backGround.classList.add("moveCSS")
}
