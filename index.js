var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage = "dice" + randomNumber1 + ".png";
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImagesrc = "images/" + randomImage;
var randomImagesrc2 = "images/" + randomImage2;

document.getElementsByTagName("img")[0].setAttribute("src", randomImagesrc);
document.getElementsByTagName("img")[1].setAttribute("src", randomImagesrc2);


if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else if (randomNumber2 < randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}