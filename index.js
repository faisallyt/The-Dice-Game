var random1;
var random2;
function function1(){
  random1=Math.floor(Math.random()*6)+1;
  var randomimage1="dice"+random1+".png";
  var image1=document.querySelectorAll("img")[0];
  image1.setAttribute("src",randomimage1);
    document.querySelector("h2").innerHTML="Player 2's Chance";
}
function function2(){
  random2=Math.floor(Math.random()*6)+1;
  var randomimage2="dice"+random2+".png";
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
}
document.querySelectorAll("img")[0].addEventListener("click",function1);

document.querySelectorAll("img")[1].addEventListener("click",function2);
