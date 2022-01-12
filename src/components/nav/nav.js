$(() => {
  $('.js-nav__icon').on('click', function () {
    const $subMenu = $(this).closest('.nav__item_with-submenu').find('.js-nav__submenu');
    $subMenu.toggleClass('nav__submenu_opened');
  });
});
