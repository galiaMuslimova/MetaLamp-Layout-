class InputOpen {
  constructor($root, drop, openDrop, changeDate) {
    this.$root = $root;
    this.drop = drop;
    this.openDrop = openDrop;
    this.changeDate = changeDate;
    this.$element = this.$root.find('.js-input-open');
    this.$inputField = this.$element.find('.js-input-open__field');
    this.$inputButton = this.$element.find('.js-input-open__button');
    this.value = this.$inputField.val();
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$inputButton.on('click', this.handleDropOpen.bind(this));
  }

  handleDropOpen() {
    this.openDrop();
  }

  toggleActiveClass() {
    this.$element.toggleClass('input-open_active');
  }

  removeActiveClass() {
    this.$element.removeClass('input-open_active');
  }
}

export default InputOpen;
