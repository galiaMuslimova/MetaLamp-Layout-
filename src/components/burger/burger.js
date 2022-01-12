$(() => {
  $('.js-burger').on('click', function () {
    $(this).toggleClass('burger_pushed');

    const $topMenu = $(this).closest('.js-header').find('.js-nav__topmenu');
    $topMenu.toggleClass('nav__topmenu_mobile');
    
    const $reg = $(this).closest('.js-header').find('.js-header__registration');
    $reg.toggleClass('header__registration_mobile');    
  });
});
