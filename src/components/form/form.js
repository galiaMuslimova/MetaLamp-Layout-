import './form.scss'
import './form_date/form_date.scss'
//import './form_select/form_select.scss'

$(window).on('load', function () {
  $('.input__btn').click(function () {
    $(this).closest('.form').find('.drop').toggleClass('active')
  });
});