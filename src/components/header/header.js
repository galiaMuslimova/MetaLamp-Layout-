$(document).ready(function() {
  $('.nav-btn').on('click', function() {
    $('nav').toggleClass('active');
    $('.nav-btn').toggleClass('open-menu');
    $('body').toggleClass('fixed-page');
  });

  $('.btn_header').click(function() {
    $(location).attr('href', "./login.html");
  })
});
