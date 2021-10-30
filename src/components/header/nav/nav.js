$(function() {
  $(".nav__down").on("click", function () {
    $(this).siblings(".nav__submenu").toggleClass("open")
  })
})