let buttonYes = document.getElementById("yes");
let buttonNo = document.getElementById("no");
let buttonSub = document.getElementById("sub");
addEventListener("click", buttonFocus);
addEventListener("click", buttonBlur);

function buttonFocus(event) {
    if(event.target.id == "yes") {
        //resetAnim(buttonYes);
        buttonYes.classList.add("selected");
    } else if (event.target.id == "no") {
        //resetAnim(buttonNo);
        buttonNo.classList.add("selected");
    }
}

function buttonBlur(event) {
    if(event.target.id == "yes") {
        buttonNo.classList.remove("selected");
    } else if (event.target.id == "no") {
        buttonYes.classList.remove("selected");
    }
}

function resetAnim(el) {
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = null;
}

TweenMax.to(buttonSub, {duration: 2, width: "165px", opacity: 1});