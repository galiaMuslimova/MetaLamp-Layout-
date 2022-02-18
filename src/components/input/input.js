class Input {
  constructor(element) {
    this.element = element;
    this.$form = this.element.closest('form');
    this.$drop = this.$form.find('.js-drop');
    this.$inputBtn = this.element.find('.js-input__btn');
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$inputBtn.on('click', this.handleDropOpen.bind(this));
    if (this.element.hasClass('js-input_for-empty')) {
      this.element.on('click', this.handleDropOpen.bind(this));
    }
  }

  handleDropOpen() {
    this.$drop.toggleClass('drop_active');
    this.element.toggleClass('input_active');
  }
}

$('.js-input').each(function () {
  let input = new Input($(this));
});
