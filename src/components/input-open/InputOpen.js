class InputOpen {
  constructor($root, openDrop) {
    this.$root = $root;
    this.openDrop = openDrop;
    this.$element = this.$root.find('.js-input-open');
    this.$inputField = this.$element.find('.js-input-open__field');
    this.$inputButton = this.$element.find('.js-input-open__button');
    this.value = this.$inputField.val();
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$inputButton.on('click', this.openDrop());
  }

  toggleActiveClass() {
    this.$element.toggleClass('input-open_active');
  }

  removeActiveClass() {
    this.$element.removeClass('input-open_active');
  }

  setDate(date) {
    this.$inputField.val(date);
  }
}

export default InputOpen;
