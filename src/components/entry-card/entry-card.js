$(() => {
  const $entryCard = $('.js-entry-card').find('.js-btn_link');
  $entryCard.on('click', () => {
    $(location).attr('href', './catalog.html');
  });
});
