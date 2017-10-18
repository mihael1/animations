let back = document.querySelector("#newback");
let startAnim = document.querySelector(".start");
let hero = document.querySelector("#man")
let aud = document.querySelector("#morningSound");
aud.play();

let audwater = document.querySelector("#waterSound")
audwater.play();
audwater.loop = true;
startAnim.addEventListener("click", startAnimations);

function startAnimations() {
    console.log("next scene please");
    aud.addEventListener('ended', soundEnded);
}

function soundEnded() {
    console.log("Rooster sound ended..")
}

function backgroundNew() {
    let bg = document.getElementById("myDIV");
    if (bg.style.display === "none") {

    } else {
        bg.style.display = "block";

        hero.classList.add("walk");
        console.log("The man will walk in!")
    }
}
hero.addEventListener('animationend', heroStop)

function heroStop() {
    console.log("And itsssss over, short but sweet")
}
