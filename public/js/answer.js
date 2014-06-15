function hideInputDiv(question){
  $('#answer #inputsDiv div').eq(question-1).hide()
};
function updateRemoveOption(question){
  if ($('#answer #inputsDiv #option'+question).length <= 2){
    $('#removeOption').css("opacity","0.2");
  }else {
    $('#removeOption').css("opacity","1");
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

$(document).ready(function() {
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
