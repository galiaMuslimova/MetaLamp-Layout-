$(() => {
  $('.js-submit').on('click', function () {
    const $selectForm = $(this).closest('form');
    const $drop = $selectForm.find('.js-drop');
    $drop.removeClass('active');
  });
});
