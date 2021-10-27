$(function() {
  $(".nav__btn").on("click", function () {
    $(this).siblings(".nav").find(".nav__topmenu").toggleClass("nav__topmenu_mobile");
    $(this).toggleClass("nav__btn_open");
  });
})