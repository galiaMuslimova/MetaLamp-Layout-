class Input {
  constructor(element) {
    this.element = element;
    this.$inputBtn = this.element.find('.js-input__btn');
    this.$inputEmpty = this.element.find('.js-input_for-empty');
    this.$form = this.element.closest('form');
    this.$drop = this.$form.find('.js-drop');
  }

  bindEventListeners() {
    $('.js-input__btn, .js-input_for-empty').on('click', this.handleDropOpen.bind(this));
  }

  handleDropOpen() {
    this.$drop.toggleClass('drop_active');
    this.element.toggleClass('input_active');
  }
}

$('.js-input').each(function() {
  const input = new Input($(this));
})


