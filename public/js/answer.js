function updateHeader(question){
  $('#new h2').text('Question '+question)
};
function nextQuestion(question){
  hideInputDiv(question-1);
  updateHeader(question);
  if($('#newSurvey div').length > question){
    showInputDiv(question)
  };
};


var Answers = {};

function UpdateQuestionView(question){
  $('#inputsDiv div').each(function(i){
    if (i === question){
      $(this).show();
    }else{
     $(this).hide();
   };
 });
};

var x1=26;
var y1=26;
var x2=26;
var y2=26;
var x3=26;
var y3=26;
var x4=26;
var y4=26;
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
  setInterval(move,1);};
function move(){
  var wm = window.innerWidth;
  var hm = window.innerHeight;
  var color = '#'+Math.floor(Math.random()*16777215).toString(16);
  ball.clearRect(0,0, wm,hm);
  ball.beginPath();
  ball.fillStyle=color;
  ball.arc(x1,y1,20,0,Math.PI*2,false);
  // ball.arc(x2,y2,1,0,Math.PI*2,true);
  // ball.arc(x3,y3,1,0,Math.PI*2,true);
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
  var question = 1;
  updateHeader(question);
  UpdateQuestionView(question);
  $('#prev').hide();

  $('#new').on('click','.option', function(event){
    Answers[question-1] = ($(this).attr('name'));
  });

  $('#new').on('click','#next', function(event){
    question ++;
    updateHeader(question);
    UpdateQuestionView(question);
    $('#prev').show();
  });
  $('#new').on('click','#prev', function(event){
    question --;
    updateHeader(question);
    UpdateQuestionView(question);
    if (question === 1){
      $('#prev').hide();
    };
  });
  $('#surveyForm').on('submit', function(e){
    e.preventDefault();
    request = $.post($('#surveyForm').attr('action'),{ans:JSON.stringify(Answers)});
  });
});
