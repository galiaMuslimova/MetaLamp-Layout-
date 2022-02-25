class Burger {
  constructor(element) {
    this.element = element;
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.element.on('click', this.handleBurgerClick);
  }

  handleBurgerClick() {
    $(this).toggleClass('burger_pushed');

    const $topMenu = $(this).closest('.js-header').find('.js-nav');
    $topMenu.toggleClass('nav_for-mobile');

    const $reg = $(this).closest('.js-header').find('.js-header__registration');
    $reg.toggleClass('header__registration_for-mobile');
  }
}

export default Burger;
