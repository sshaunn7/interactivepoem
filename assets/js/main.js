// main.js

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}


let divs = document.querySelectorAll(".grid-container div");


function randomize() {
    console.log(divs.length, "randomize!");


    divs.forEach( function (div) {
        let scale = randomNumber(.5, 1.5);
        let translateX = randomNumber(-120, 120);
        let translateY = randomNumber(-80, 80);
        let rotate = randomNumber(-360, 360);

        div.style.transform =
            `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;
    });

    // Back to original position after 1.5s
    setTimeout(function () {
        divs.forEach(function (div) {
            div.style.transform = 
                "scale(1) translate(0%, 0%) rotate(0deg)";
        });
    }, 1500);
}

document.addEventListener("click", randomize);
