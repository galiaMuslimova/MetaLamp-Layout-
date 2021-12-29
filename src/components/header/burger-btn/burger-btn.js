$(() => {
  $('.js-nav__btn').on('click', function () {
    const $topMenu = $(this).closest('.js-header').find('.js-nav__topmenu');
    $topMenu.toggleClass('nav__topmenu_mobile');
    const $reg = $(this).closest('.js-header').find('.js-header__registration');
    $reg.toggleClass('header__registration_mobile');
    $(this).toggleClass('nav__btn_open');
  });
});
