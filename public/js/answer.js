function hideNext(){
$('#next').css("opacity","0.2");
}
function hidePrew(){
$('#prev').css("opacity","0.2");
}
function hideSubmit(){
$('#submit').css("opacity","0.2");
}
function showNext(){
$('#next').css("opacity","1");
}
function showPrew(){
$('#prev').css("opacity","1");
}
function showSubmit(){
$('#submit').css("opacity","1");
}
function greyOptions(question){
  $('#answer #answerDiv #'+question+' .option').each(function(index){
    $('#answer #answerDiv #'+question+' .option').eq(index).css('background','grey');
  });
};

function updateAnswers(question){
  console.log(question);
  console.log($('#answer #answerDiv div').length);



  $('#answer h2').text('Question '+question);
  if($('#answer #answerDiv div').length === question){
    showSubmit()
    hideNext();
  };
  $('#answer #answerDiv div').each(function(index){
    $('#answer #answerDiv div').eq(index).hide();
  });
  $('#answer #answerDiv #'+question).show()
};


var Answers = {};

$(document).ready(function() {
  var question = 1;
  updateAnswers(question);
  // Making prev button grey on statup
  hidePrew();
  hideSubmit();

  // Prev button click
  $('#answer').on('click','#next', function(event){
    if(question === $('#answer #answerDiv div').length){
      hideNext();
      showSubmit();
    }else{
      question ++;
      updateAnswers(question);
      showPrew();
    };
  });

  // Next button click
  $('#answer').on('click','#prev', function(event){
    if (question <= 2){
      hidePrew();
    };
    if (question != 1){
      question --;
      updateAnswers(question);
      showNext();
      hideSubmit();
    };
  });
  // Click answer
  $('#answer').on('click','.option', function(event){
    Answers[question-1] = ($(this).attr('name'));
    greyOptions(question);
    $(this).css('background','orange');
  });

  // Submit button click
  $('#surveyForm').on('submit', function(e){
    e.preventDefault();
    // if (valid()){
    request = $.post($('#surveyForm').attr('action'),{ans:JSON.stringify(Answers)});
    // }else{
      //error message saying you need to answer  a spesific question
      // maybe move them to a unawnserd question? or only show the submit button?
    // };

  });
});
