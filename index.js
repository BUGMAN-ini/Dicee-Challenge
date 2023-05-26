let randomnumber1 = Math.floor(Math.random() * 6) + 1 //1 - 6

let randomDiceimage = "dice" + randomnumber1 + ".png"; //dice.pn

let randomImageSource = "images/" + randomDiceimage;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource);

let randomnumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins"
}
 else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins"
 }

 else {
    document.querySelector("h1").innerHTML = document.querySelector("h1").innerHTML = "It's a Draw"
 }