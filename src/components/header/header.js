$(() => {
  $('.js-nav__login').on('click', () => {
    $(location).attr('href', './login.html');
  });

  $('.js-nav__signin').on('click', () => {
    $(location).attr('href', './signin.html');
  });
});
