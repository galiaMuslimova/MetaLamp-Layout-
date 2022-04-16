import Observer from '../../observer/Observer';

class Input {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-input');
    this.$inputField = this.$element.find('.js-input__field');
    this.observer = new Observer();
    this.value = this.$inputField.val();
    this.hasOpenButton = this.$element.find('.js-input__button_for-open').length > 0;
    if (this.hasOpenButton) {
      this.initOpenButton();
    }
  }

  initOpenButton() {
    const $openButton = this.$element.find('.js-input__button_for-open');
    $openButton.on('click', this.handleClickIconOpen.bind(this));
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
