$(window).on('load', () => {
  $('.js-catalog-item__content').on('click', () => {
    $(location).attr('href', './room.html');
  });
});
