var randomnum1 = Math.floor(Math.random()*6)+1; 
var randomdiceimg = "dice"+randomnum1+".png";
var randomimgsource = "images/"+randomdiceimg;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimgsource);

var randomnum2 = Math.floor(Math.random()*6)+1;
var randomdiceimg2 = "dice"+randomnum2+".png";
var randomimgsource2 = "images/"+randomdiceimg2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimgsource2);

if(randomnum1 > randomnum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomnum2 > randomnum1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}