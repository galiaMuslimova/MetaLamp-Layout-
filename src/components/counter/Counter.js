class Counter {
  constructor(element, changeCountFunction) {
    this.element = element;
    this.changeCountFunction = changeCountFunction;
    this.$numButton = $(this.element).find('.js-counter__number');
    this.numButtonValue = Number(this.$numButton.text());
    this.$minusButton = $(this.element).find('.js-counter__button_with-minus');
    this.$plusButton = $(this.element).find('.js-counter__button_with-plus');
    this.isDisable = this.$minusButton.hasClass('counter__button_disabled');
  }

  init() {
    this.bindEventListeners();
    this.toggleDisable();
  }

  bindEventListeners() {
    this.$minusButton.on('click', this.handleMinusButtonClick.bind(this));
    this.$plusButton.on('click', this.handlePlusButtonClick.bind(this));
  }

  handleMinusButtonClick() {
    if (this.numButtonValue > 0) {
      this.numButtonValue -= 1;
      this.$numButton.html(this.numButtonValue);
    }
    this.toggleDisable();
    this.changeCountFunction();
  }

  handlePlusButtonClick() {
    this.numButtonValue += 1;
    this.$numButton.html(this.numButtonValue);
    this.toggleDisable();
    this.changeCountFunction();
  }

  toggleDisable() {
    if (this.numButtonValue < 1 && !this.isDisable) {
      this.$minusButton.addClass('counter__button_disabled');
      this.isDisable = !this.isDisable;
    } else if (this.numButtonValue > 0 && this.isDisable) {
      this.$minusButton.removeClass('counter__button_disabled');
      this.isDisable = !this.isDisable;
    }
  }

  resetForm() {
    this.numButtonValue = 0;
    this.$numButton.text(0);
    this.toggleDisable();
  }
}

export default Counter;
