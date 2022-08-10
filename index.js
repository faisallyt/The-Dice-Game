var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6)+1;
var randomimage1="images/dice"+random1+".png";
var randomimage2="images/dice"+random2+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage1);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);
if(random1==random2){
  document.querySelector("h2").innerHTML="Match Drawn.";
}
else if(random1>random2){
  document.querySelector("h2").innerHTML="Player 1 won the Match ";
}
else if(random1<random2){
  document.querySelector("h2").innerHTML="Player 2 Won the Match ";
}
