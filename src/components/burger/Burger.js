class Burger {
  constructor($root, openMenu) {
    this.$root = $root;
    this.openMenu = openMenu;
    this.$element = this.$root.find('.js-burger');
    this.bindEventListeners();
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
