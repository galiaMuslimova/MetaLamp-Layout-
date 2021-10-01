import './form.scss'
import './form_date/form_date.scss'

$(window).on('load', function () {
  $('.input__btn').click(function () {
    $(this).closest('.form').find('.drop').toggleClass('active')
  });
});