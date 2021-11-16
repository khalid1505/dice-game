var RandomNumber1 = Math.floor(Math.random() * 6 ) + 1;

var randomDiceImage = "dice" + RandomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img") [0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img") [1].setAttribute("src", randomImageSource2);


if (RandomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🔴 player 1 wins!";
}

else if (randomNumber2 > RandomNumber1){
  document.querySelector("h1").innerHTML = "🔵 player 2 wins!";
}
else {
  document.querySelector("h1").innerHTML = " Draw !"
}
