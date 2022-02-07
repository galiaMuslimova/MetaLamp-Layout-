$(() => {
  const $logo = $('.js-header').find('.js-logo');
  $logo.on('click', () => {
    $(location).attr('href', './main.html');
  });
});
