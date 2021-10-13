$(document).ready(function() {
  $('.nav-btn').on('click', function() {
    $('nav').toggleClass('active');
    $('.nav-btn').toggleClass('open-menu');
    $('body').toggleClass('fixed-page');
  });
});
