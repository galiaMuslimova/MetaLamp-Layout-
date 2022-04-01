class Drop {
  constructor($root, openDrop) {
    this.$root = $root;
    this.openDrop = openDrop;
    this.$element = this.$root.find('.js-drop');
  }

  removeActiveClass() {
    this.$element.removeClass('drop_active');
  }

  toggleActiveClass() {
    this.$element.toggleClass('drop_active');
  }

  getDropElement() {
    return this.$element;
  }

  hasGuestsClass() {
    return this.$element.hasClass('drop_for-guests');
  }

  hasPlacementClass() {
    return this.$element.hasClass('drop_for-placement');
  }
}

export default Drop;
