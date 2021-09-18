$(document).ready(function(event) {
  $('.input__btn').click(function() {
    let id = $(this).parent()[0].id;
    $('#' + id + '-input').toggleClass('active');
  })
})