$(function() {
  $(".nav__btn").on("click", function () {
    $(this).closest(".header").find(".nav__topmenu").toggleClass("nav__topmenu_mobile");
    $(this).closest(".header").find(".header__registration").toggleClass("header__registration_mobile");
    $(this).toggleClass("nav__btn_open");
  });
})