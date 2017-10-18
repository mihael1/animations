let back = document.querySelector("#newback");
let startAnim = document.querySelector(".start");
startAnim.addEventListener("click", startAnimations);

function startAnimations() {
    console.log("next scene please");
    back.classList.add("#newbackground");
}

function backgroundNew() {
    let x = document.getElementById("myDIV");
    if (x.style.display === "none") {

    } else {
       x.style.display = "block";
    }
}
