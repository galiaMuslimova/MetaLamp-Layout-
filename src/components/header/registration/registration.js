$(function(){
  $(".nav__login").on("click", function () {
    $(location).attr('href', "./login.html");
  });

  $(".nav__signin").on("click", function () {
    $(location).attr('href', "./signin.html");
  });
})