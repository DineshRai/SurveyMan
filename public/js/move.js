var x1=30;
var y1=30;
var x2=100;
var y2=100;
var x3=200;
var y3=200;
var x4=300;
var y4=300;
var dx1=Math.floor(Math.random()*10+4);
var dy1=Math.floor(Math.random()*10+4);
var dx2=Math.floor(Math.random()*10+4);
var dy2=Math.floor(Math.random()*10+4);
var dx3=Math.floor(Math.random()*10+4);
var dy3=Math.floor(Math.random()*10+4);
var dx4=Math.floor(Math.random()*10+4);
var dy4=Math.floor(Math.random()*10+4);


function start(){
  var wm = window.innerWidth;
  var hm = window.innerHeight;
  ball = document.getElementById("canvas");
  ball.width = wm
  ball.height = hm
  ball = ball.getContext("2d");
  setInterval(move,10);
};
function move(){
  var wm = window.innerWidth;
  var hm = window.innerHeight;
  var color = '#'+Math.floor(Math.random()*16777215).toString(16);
  ball.clearRect(0,0, wm,hm);
  ball.beginPath();
  ball.fillStyle=color;
  ball.arc(x1,y1,20,0,Math.PI*2,true);
  ball.arc(x2,y2,20,0,Math.PI*2,true);
  // ball.arc(x3,y3,20,0,Math.PI*2,true);
  // ball.arc(x4,y4,1,0,Math.PI*2,true);
  ball.closePath();
  ball.fill();
  if( x1<25 || x1>wm-25) {dx1=-dx1;}
  if( y1<25 || y1>hm-25) {dy1=-dy1;}
  x1+=dx1;
  y1+=dy1;
  if( x2<25 || x2>wm-25) {dx2=-dx2;}
  if( y2<25 || y2>hm-25) {dy2=-dy2;}
  x2+=dx2;
  y2+=dy2;
  if( x3<25 || x3>wm-25) {dx3=-dx3;}
  if( y3<25 || y3>hm-25) {dy3=-dy3;}
  x3+=dx3;
  y3+=dy3;
    if( x4<25 || x4>wm-25) {dx4=-dx4;}
  if( y4<25 || y4>hm-25) {dy4=-dy4;}
  x4+=dx4;
  y4+=dy4;};
$(document).ready(function() {
  start();
});
