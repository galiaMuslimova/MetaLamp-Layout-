class Nav {
  constructor($root) {
    this.$root = $root;
    this.init();
    this.bindEventHandlers();
  }

  init() {
    this.$element = this.$root.find('.js-nav');
    this.$subMenuLink = this.$element.find('.js-nav__item_with-submenu');
  }

  bindEventHandlers() {
    this.$subMenuLink.on('click', this.handleNavSubmenuOpen);
    $(document).on('click', Nav.handleNavSubmenuClose);
  }

  handleNavSubmenuOpen() {
    const $navItem = $(this).closest('.js-nav__item_with-submenu');
    const $subMenu = $navItem.find('.js-nav__submenu');
    $subMenu.toggleClass('nav__submenu_opened');
  }

  toggleMobileClass() {
    this.$element.toggleClass('nav_for-mobile');
  }

  static handleNavSubmenuClose(event) {
    const $navItemArr = $('.js-nav__item_with-submenu');
    const $navItem = $(event.target).closest('.js-nav__item_with-submenu');
    $navItemArr.each(function () {
      if ($navItem[0] !== $(this)[0]) {
        const $subMenu = $(this).find('.js-nav__submenu');
        $subMenu.removeClass('nav__submenu_opened');
      }
    });
  }

  changeStyle(index) {
    const $link = this.$element.find('.nav__link');
    const $chosenLink = $link[index];
    $($chosenLink).addClass('nav__link_checked');
  }
}

export default Nav;
