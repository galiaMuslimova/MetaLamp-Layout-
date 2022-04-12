import Observer from '../../observer/Observer';

class Input {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-input');
    this.$inputField = this.$element.find('.js-input__field');
    this.observer = new Observer();
    this.value = this.$inputField.val();
    this.hasOpenButton = this.$element.find('.js-input__button_for-open').length > 0;
    this.$openButton = undefined;
    if (this.hasOpenButton) {
      this.initOpenButton();
    }
  }

  initOpenButton() {
    this.$openButton = this.$element.find('.js-input__button_for-open');
    this.$openButton.on('click', this.handleClickIconOpen.bind(this));
  }

  handleClickIconOpen() {
    this.observer.notify('click');
  }

  toggleActiveClass() {
    this.$element.toggleClass('input_active');
  }

  removeActiveClass() {
    this.$element.removeClass('input_active');
  }

  setValue(value) {
    this.$inputField.val(value);
  }
}

export default Input;
