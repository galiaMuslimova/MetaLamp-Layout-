class Burger {
  constructor($root, openMenu) {
    this.$root = $root;
    this.openMenu = openMenu;
    this.init();
    this.bindEventListeners();
  }

  init() {
    this.$element = this.$root.find('.js-burger');
  }

  bindEventListeners() {
    this.$element.on('click', this.handleBurgerClick.bind(this));
  }

  handleBurgerClick() {
    this.$element.toggleClass('burger_pushed');
    this.openMenu();
  }
}

export default Burger;
