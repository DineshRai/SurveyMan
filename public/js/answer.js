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
    if (i === question-1){
      $(this).show()
    }else{
     $(this).hide()
   };
 });
}
var x1=26;
var y1=26;
var x2=26;
var y2=26;
var x3=26;
var y3=26;
var dx1=Math.floor(Math.random()*10+4);
var dy1=Math.floor(Math.random()*10+4);
var dx2=Math.floor(Math.random()*10+4);
var dy2=Math.floor(Math.random()*10+4);
var dx3=Math.floor(Math.random()*10+4);
var dy3=Math.floor(Math.random()*10+4);


function start()
{
  var wm = window.innerWidth;
  var hm = window.innerHeight;
  ball = document.getElementById("canvas");
  ball.width = wm
  ball.height = hm
  ball = ball.getContext("2d");


  setInterval(move,5);
}

function move(){
  var wm = window.innerWidth;
  var hm = window.innerHeight;
  var color = '#'+Math.floor(Math.random()*16777215).toString(16);
  ball.clearRect(0,0, wm,hm);
  ball.beginPath();
  ball.fillStyle=color;
  ball.arc(x1,y1,20,0,Math.PI*2,true);
  ball.arc(x2,y2,20,0,Math.PI*2,true);
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
};
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
    updateQuestionView(question);
    if (question === 1){
      $('#prev').hide();
    };
  });
  $('#surveyForm').on('submit', function(e){
    e.preventDefault();
    $.post($('#surveyForm').attr('action'),{ans:JSON.stringify(Answers)});
  });
});
