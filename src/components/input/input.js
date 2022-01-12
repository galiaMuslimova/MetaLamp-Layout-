$(document).ready(() => {
  $('.js-input__btn').on('click', function () {
    const $drop = $(this).closest('form').find('.js-drop');
    $drop.toggleClass('drop_active');
  });
});
