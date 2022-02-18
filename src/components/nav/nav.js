class Nav {
  constructor() {
    this.$navIcon = $('.js-nav__icon');
    this.bindEventHandlers();
  }

  bindEventHandlers() {
    $('.js-nav__icon').on('click', this.handleNavSubmenuOpen);
    $(document).on('click', this.handleNavSubmenuClose);
  }

  handleNavSubmenuOpen() {
    const $subMenu = $(this).closest('.nav__item_with-submenu').find('.js-nav__submenu');
    $subMenu.toggleClass('nav__submenu_opened');
  }

  handleNavSubmenuClose(event) {
    const $navItemArr = $('.js-nav__item_with-submenu');
    $navItemArr.each(function () {
      if ($(this).find(event.target).length === 0) {
        $(this).find('.js-nav__submenu').removeClass('nav__submenu_opened');
      }
    });
  }
}

const nav = new Nav();
