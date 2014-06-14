$(document).ready(function(){
  $("#signup_form").hide();
  $("#login_form").hide();
   $("#signup").on("click",function(){
      $("#signup_form").toggle();
      $("#login_form").hide();
      $("#blur").css("opacity","0.4");

  });
  $("#login").on("click",function(){
      $("#login_form").show();
      $("#signup_form").hide();
      $("#blur").css("opacity","0.4");

  });
  $("img").on("click",function(){
      $("#login_form").hide();
      $("#signup_form").hide();
      $("#blur").css("opacity","1.0");

  });
});
