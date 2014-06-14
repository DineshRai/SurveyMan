function addInputQuestion(question){
$('#newSurvey #inputsDiv div').last().append('<input class="question" name="question[]" type="text" placeholder="question '+question+'">');
};
function addInputOption(question, option){
  $('#newSurvey #inputsDiv div').last().append('<input class="option" name="options'+question+'[]" type="text" placeholder="option '+option+'">')
};
function hideInputDiv(question){
  $('#newSurvey #inputsDiv div').eq(question-1).hide()
};
function showInputDiv(question){
  $('#newSurvey  #inputsDiv div').eq(question-1).show()
};
function updateHeader(question){
  $('#new h2').text('Question '+question)
};
function nextQuestion(question){
    hideInputDiv(question-1);
    updateHeader(question)
  if($('#newSurvey div').length > question){
    showInputDiv(question)
  }else{
  $('#newSurvey #inputsDiv').append('<div></div>')
    addInputQuestion(question);
    for(i = 1; i < 3; i++){
      addInputOption(question, i)
    }
  }
}

$(document).ready(function() {
  var question = 1
  updateHeader(question)
  nextQuestion(question)
  $('#prev').hide()

  $('#new').on('click','#next', function(event){
    question ++;
    nextQuestion(question)
    $('#prev').show()
  });
  $('#new').on('click','#prev', function(event){
    hideInputDiv(question);
    question --;
    updateHeader(question)
    showInputDiv(question)
    if (question === 1){
      $('#prev').hide()
    };
  });
});
