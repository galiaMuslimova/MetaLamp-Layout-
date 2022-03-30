class Burger {
  constructor($root, openBurgerFunction) {
    this.$root = $root;
    this.openBurgerFunction = openBurgerFunction;
    this.$element = this.$root.find('.js-burger');
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$element.on('click', this.handleBurgerClick);
  }

  handleBurgerClick() {
    $(this).toggleClass('burger_pushed');
    this.openBurgerFunction();
  }
}

export default Burger;
