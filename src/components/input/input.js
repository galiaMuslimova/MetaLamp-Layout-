$(() => {
  $('.js-input__btn, .js-input_for-empty').on('click', function () {
    const $drop = $(this).closest('form').find('.js-drop');
    $drop.toggleClass('drop_active');
    const $input = $(this).closest('form').find('.js-input');
    $input.toggleClass('input_active');
  });
});
