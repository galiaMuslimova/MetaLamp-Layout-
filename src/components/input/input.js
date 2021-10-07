$(window).on('load', function () {
  $('.input-row__btn').click(function () {
    $(this).closest('form').find('.drop').toggleClass('active')
  })
})