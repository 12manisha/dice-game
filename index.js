
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage = "dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImage);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="Player 1 Winssssss🎇";
}
else if(randomNumber2>randomNumber1)
{document.querySelector("h1").innerHTML="Player 2 Winssssss🎆";
}
else
{document.querySelector("h1").innerHTML="Draw🎃";}