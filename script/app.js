var w ;
var t;
var clicked = 5;
var score = 0;
try {
  var top = localStorage.getItem("top");

  if (top=="[object Window]"){
    localStorage.setItem("top", 0);
  }
  document.getElementById('top-scored').innerHTML = "Top Score : " + localStorage.getItem("top");
} catch (e) {

} finally {

}
function tr(){
  if (clicked==t){
    score++;
    if (score>top){
      localStorage.setItem("top", score);
    }
    document.getElementById('score-board').innerHTML = "Your Score : " + score;
    var myArray = ['&#128513;', '&#128515;', '&#128521;', '&#128522;', '&#128525;', '&#128526;', '&#128540;', '&#128559;', '&#128561;'];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    document.getElementById('emoji').innerHTML = rand;
  }else{
    if(clicked!=5){
      clearInterval(game);
      var myArray1 = ['&#128520;', '&#128531;', '&#128544;', '&#128533;', '&#128566;'];
      var rand1 = myArray1[Math.floor(Math.random() * myArray1.length)];
      document.getElementById('emoji').innerHTML = rand1 + "<br/>Oops failed !";
    }
  }
  t = Math.floor((Math.random() * 2) + 0);
  w = Math.floor((Math.random() * 20) + 1);
  var n1 = Math.floor((Math.random() * 10) + 1);
  var n2 = Math.floor((Math.random() * 10) + 1);
  var  r = n1 + n2;
  if (t==1){
     r = n1 + n2;
  }else {
    while(r==w) {
      wrong();
    }
    r = w;
  }
  document.getElementById('q').value = n1 + " + " + n2 + " = " + r;
  clicked =4;
}

function wrong(){
  w  = Math.floor((Math.random() * 21) + 1);
}
function tbtn(){
  clicked = 1;
}
function fbtn(){
  clicked = 0;
}
var game = setInterval(function(){tr()},2200);
