$(() => {
  const $iconExpandable = $('.js-icon-open_expandable');
  $iconExpandable.on('click', function () {
    $(this).toggleClass('icon-open_active');
    const $drop = $(this).closest('.filter__expandable').find('.js-drop');
    $drop.toggleClass('drop_active');
  });
})