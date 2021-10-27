$(function() {
  $(".nav__down").on("click", function () {
    $(this).siblings(".nav__submenu").toggleClass("open")
  })

  $(".nav__login").on("click", function () {
    $(location).attr('href', "./login.html");
  });

  $(".nav__signin").on("click", function () {
    $(location).attr('href', "./signin.html");
  });
})