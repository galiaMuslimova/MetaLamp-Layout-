import Observer from '../../observer/Observer';

class InputOpen {
  constructor($root) {
    this.$root = $root;
    this.observer = new Observer();
    this.$element = this.$root.find('.js-input-open');
    this.$inputField = this.$element.find('.js-input-open__field');
    this.$inputButton = this.$element.find('.js-input-open__button');
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$inputButton.on('click', this.handleButtonClick.bind(this));
  }

  handleButtonClick() {
    this.observer.notify('click');
  }

  toggleActiveClass() {
    this.$element.toggleClass('input-open_active');
  }

  removeActiveClass() {
    this.$element.removeClass('input-open_active');
  }

  setValue(value) {
    this.$inputField.val(value);
  }
}

export default InputOpen;
