$(document).ready(function() {
  $('.nav-btn').on('click', function() {
    $('.menu-list').toggleClass('active-menu');
    $('.nav-btn').toggleClass('open-menu');
    $('body').toggleClass('fixed-page');
  });

  $('.btn_header').click(function() {
    $(location).attr('href', "./login.html");
  })

  $("nav i").click(function() {
    $(this).closest('li').find('.drop').toggleClass('active')
  })
});
