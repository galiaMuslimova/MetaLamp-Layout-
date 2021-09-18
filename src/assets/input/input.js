import '@/assets/input/select/select.js'

$(document).ready(function(event) {
  $('.input__btn').click(function() {
    let id = $(this).parent()[0].id;
    console.log(id);
    $('#' + id + '-input').toggleClass('active');
  })
})