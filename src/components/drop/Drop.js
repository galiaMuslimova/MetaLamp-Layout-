class Drop {
  constructor(root) {
    this.$root = $(root);
    this.$element = this.root.find('.js-drop');
    Drop.bindEventListeners();
  }

  static bindEventListeners() {
    $(document).on('click', Drop.handleDropClassActiveRemove);
  }

  static handleDropClassActiveRemove(event) {
    if (this.$root.find(event.target).length === 0) {
      $(this.$element).removeClass('drop_active');
    }
  }

  removeActiveClass(className) {
    this.$element.removeClass('drop_active');
  }

  toggleActiveClass(className) {
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
