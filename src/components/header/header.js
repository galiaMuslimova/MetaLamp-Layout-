$(() => {
  $('.js-header__login').on('click', () => {
    $(location).attr('href', './login.html');
  });

  $('.js-header__signin').on('click', () => {
    $(location).attr('href', './signin.html');
  });
});
