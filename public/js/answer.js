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

$(document).ready(function() {
  var question = 1;
  updateHeader(question);
  UpdateQuestionView(question);
  $('#prev').hide();

  $('#new').on('click','.option', function(event){
    console.log($(this).attr('name'));
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
    console.log(Answers);
    console.log($('#surveyForm'))
    // $.post('this.attr('name')', Answers)
  });
});
