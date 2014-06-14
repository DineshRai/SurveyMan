function addInputQuestion(question){
  $('#newSurvey #inputsDiv').append('<div id="'+question+'"></div>');
  $('#newSurvey #inputsDiv #'+question).append('<input class="question" name="question[]" type="text" placeholder="question '+question+'">');
};
function addInputOption(question){
  $('#newSurvey #inputsDiv #'+question).append('<input class="option" id="option'+question+'" name="options'+question+'[]" type="text" placeholder="option">')
};
function removeInputOption(question){
  $('#newSurvey #inputsDiv #option'+question).last().remove();
};
function hideInputDiv(question){
  $('#newSurvey #inputsDiv div').eq(question-1).hide()
};
function updateRemoveOption(question){
  if ($('#newSurvey #inputsDiv #option'+question).length <= 2){
    $('#removeOption').css("opacity","0.2");
  }else {
    $('#removeOption').css("opacity","1");
  };
};
function updateHeader(question){

};
function updateInputs(question){
  $('#new h2').text('Question '+question);
  console.log($('#inputsDiv div').length)
  console.log(question)
  if($('#inputsDiv div').length < question){
    console.log(true)
    addInputQuestion(question);
    for(i = 1; i < 3; i++){
      addInputOption(question)
    };
  };
  $('#newSurvey  #inputsDiv div').each(function(index){
    $('#newSurvey  #inputsDiv div').eq(index).hide();
  });
  $('#newSurvey #inputsDiv #'+question).show()
  updateRemoveOption(question)
};

$(document).ready(function() {
  var question = 1
  updateInputs(question);
  $('#prev').css("opacity","0.2");
  $('#removeOption').css("opacity","0.2");



  $('#new').on('click','#next', function(event){
    question ++;
    updateInputs(question)
    $('#prev').css("opacity","1");
  });
  $('#new').on('click','#addOption', function(event){
    $('#removeOption').css("opacity","1");
    addInputOption(question)
  });
  $('#new').on('click','#removeOption', function(event){
    if ($('#newSurvey #inputsDiv #option'+question).length <= 2){
      $('#removeOption').css("opacity","0.2");
    } else if($('#newSurvey #inputsDiv #option'+question).length === 3){
      $('#removeOption').css("opacity","0.2");
      removeInputOption(question);
    }else{
      removeInputOption(question);
    };
  });
  $('#new').on('click','#prev', function(event){
    if (question <= 2){
      $('#prev').css("opacity","0.2");
    }
    if (question != 1){
      question --;
      updateInputs(question)

    };
  });
});
