$(document).ready(function() {
  $(".nav__btn").on("click", function() {
    $(".nav__topmenu").toggleClass("nav__topmenu_mobile");
    $(".nav__btn").toggleClass("nav__btn_open");
    $("body").toggleClass("fixed-page");
  });

  $(".nav__login").on("click", function() {
    $(location).attr('href', "./login.html");
  });

  $(".nav__signin").on("click", function () {
    $(location).attr('href', "./signin.html");
  });

  $(".nav__down").on("click", function() {
    $(this).siblings(".nav__submenu").toggleClass("open")
  })
});
