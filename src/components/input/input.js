$(document).ready(() => {
  $('.js-input__open').on('click', function () {
    const $drop = $(this).closest('form').find('.js-drop');
    $drop.toggleClass('active');
  });
});
