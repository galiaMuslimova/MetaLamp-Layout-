class Nav {
  constructor() {
    this.$navIcon = $('.js-nav__icon');
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

  static handleNavSubmenuClose() {
    const $subMenuArr = $('.js-nav__submenu');
    $subMenuArr.each(function () {
      if ($(this).find(this.event.target).length === 0) {
        $(this).removeClass('nav__submenu_opened');
      }
    });
  }
}

const nav = new Nav();
