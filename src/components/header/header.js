$(() => {
  $('.js-header__login-btn').on('click', () => {
    $(location).attr('href', './login.html');
  });

  $('.js-header__signin-btn').on('click', () => {
    $(location).attr('href', './signin.html');
  });
});
