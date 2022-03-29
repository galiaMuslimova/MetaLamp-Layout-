class Nav {
  constructor(root) {
    this.root = root;
    this.element = this.root.find('.js-nav');
    this.$navIcon = this.element.find('.js-nav__icon');
    this.bindEventHandlers();
  }

  bindEventHandlers() {
    this.$navIcon.on('click', this.handleNavSubmenuOpen);
    $(document).on('click', Nav.handleNavSubmenuClose);
  }

  handleNavSubmenuOpen() {
    const $subMenu = $(this).closest('.js-nav__item_with-submenu').find('.js-nav__submenu');
    $subMenu.toggleClass('nav__submenu_opened');
  }

  toggleMobileClass() {
    this.element.toggleClass('nav_for-mobile');
  }

  static handleNavSubmenuClose(event) {
    const $navItemArr = $('.js-nav__item_with-submenu');
    $navItemArr.each(function () {
      $(this).find('.js-nav__submenu').removeClass('nav__submenu_opened');
    });
  }

  checkLink(index) {
    this.element.find('.nav__link')[index].addClass('nav__link_checked');
  }
}

export default Nav;
