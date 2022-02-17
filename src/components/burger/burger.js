class Burger {
  constructor() {
    this.$burger = $('.js-burger');
  }

  bindEventListeners() {
    this.$burger.on('click', this.handleBurgerClick);
  }

  handleBurgerClick() {
    $(this).toggleClass('burger_pushed');

    const $topMenu = $(this).closest('.js-header').find('.js-nav');
    $topMenu.toggleClass('nav_for-mobile');

    const $reg = $(this).closest('.js-header').find('.js-header__registration');
    $reg.toggleClass('header__registration_for-mobile');
  }
}
