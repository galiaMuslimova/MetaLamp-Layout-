class Drop {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-drop');
    this.bindEventListeners();
  }

  bindEventListeners() {
    $(document).on('click', this.handleDropClassActiveRemove.bind(this));
  }

  handleDropClassActiveRemove(event) {
    if (this.$root.find(event.target).length === 0) {
      $(this.$element).removeClass('drop_active');
    }
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
