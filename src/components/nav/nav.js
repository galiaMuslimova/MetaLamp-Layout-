$(() => {
  $('.js-nav__down').on('click', function () {
    const $subMenu = $(this).siblings('.js-nav__submenu');
    $subMenu.toggleClass('open');
  });
});
