let back = document.querySelector("#newback");
let startAnim = document.querySelector(".start");
let hero = document.querySelector(".man")
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
    let x = document.getElementById("myDIV");
    if (x.style.display === "none") {

    } else {
        x.style.display = "block";
    }
}



/* let horse = document.querySelector("#horse");
  let horseSound = document.querySelector("#horseSound");

  horse.addEventListener("click", playSound);

  function playSound(){
    horseSound.volume = .5;
    horseSound.play();
    horseSound.addEventListener('ended', soundEnded);
  }

  function soundEnded(){
    console.log("The sound ended :-(")
  }
  */
