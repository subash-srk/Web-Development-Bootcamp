// Dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber1 +".png";
var randomImageSource = "images/"+randomImage;

var dice1 = document.querySelector(".img1");
dice1.setAttribute("src", randomImageSource);

// Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber2 +".png";
var randomImageSource = "images/"+randomImage;

var dice2 = document.querySelector(".img2");
dice2.setAttribute("src", randomImageSource);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Match Draw ";
}
