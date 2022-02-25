class Nav {
  constructor(element) {
    this.element = element;
    this.$navIcon = this.element.find('.js-nav__icon');
    this.bindEventHandlers();
  }

  bindEventHandlers() {
    $('.js-nav__icon').on('click', this.handleNavSubmenuOpen);
    $(document).on('click', Nav.handleNavSubmenuClose);
  }

  handleNavSubmenuOpen() {
    const $subMenu = $(this).closest('.nav__item_with-submenu').find('.js-nav__submenu');
    $subMenu.toggleClass('nav__submenu_opened');
  }

  static handleNavSubmenuClose(event) {
    const $navItemArr = $('.js-nav__item_with-submenu');
    $navItemArr.each(function () {
      if ($(this).find(event.target).length === 0) {
        $(this).find('.js-nav__submenu').removeClass('nav__submenu_opened');
      }
    });
  }
}

export default Nav;
