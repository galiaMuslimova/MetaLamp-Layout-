$(() => {
  $('.js-nav__icon').on('click', function () {
    const $subMenu = $(this).closest('.nav__item_with-submenu').find('.js-nav__submenu');
    $subMenu.toggleClass('nav__submenu_opened');
  });

  $('.js-nav__item_with-submenu').each(function () {
    const submenu = this;

    $(document).on('click', (event) => {
      if ($(submenu).find(event.target).length == 0) {
        $(submenu).find('.nav__submenu').removeClass('nav__submenu_opened');
      }
    });
  });
});
