// random number generation
var randomNumber1;
randomNumber1 = Math.random()*6+1;
randomNumber1=Math.floor(randomNumber1);

var randomNumber2;
randomNumber2 = Math.random()*6+1;
randomNumber2=Math.floor(randomNumber2);

// setting the left images
if(randomNumber1 === 1) {
  document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if (randomNumber1 === 2) {
  document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if (randomNumber1 === 3) {
  document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if (randomNumber1 === 4) {
  document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if (randomNumber1 === 5) {
  document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else {
  document.querySelector(".img1").setAttribute("src","images/dice6.png");
}

// setting the right images

if(randomNumber2 === 1) {
  document.querySelector(".img2").setAttribute("src","images/dice1.png");

}
else if (randomNumber2 === 2) {
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if (randomNumber2 === 3) {
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if (randomNumber2 === 4) {
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if (randomNumber2 === 5) {
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else {
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
}

// declare of winner
if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "😄Player1Wins!";
}
else if (randomNumber2 > randomNumber1) {

  document.querySelector("h1").innerHTML = "Player2Wins!😄";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}


// var randomImageSource ="images/dice" +randomNumber1+ ".png";
// document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);
//
// var randomImageSource2 ="images/dice" +randomNumber2+ ".png";
// document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
