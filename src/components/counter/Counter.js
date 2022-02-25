class Counter {
  constructor(element) {
    this.element = element;
    this.$numBtn = $(this.element).find('.js-counter__num');
    this.numBtnValue = Number(this.$numBtn.text());
    this.$minusBtn = $(this.element).find('.js-counter__btn_with-minus');
    this.$plusBtn = $(this.element).find('.js-counter__btn_with-plus');
    this.isDisable = this.$minusBtn.hasClass('counter__btn_disabled');
  }

  init() {
    this.bindEventListeners();
    this.toggleDisable();
  }

  bindEventListeners() {
    this.$minusBtn.on('click', this.handleMinusBtnClick.bind(this));
    this.$plusBtn.on('click', this.handlePlusBtnClick.bind(this));
  }

  handleMinusBtnClick() {
    if (this.numBtnValue > 0) {
      this.numBtnValue -= 1;
      this.$numBtn.html(this.numBtnValue);
    }
    this.toggleDisable();
  }

  handlePlusBtnClick() {
    this.numBtnValue += 1;
    this.$numBtn.html(this.numBtnValue);
    this.toggleDisable();
  }

  toggleDisable() {
    if (this.numBtnValue < 1 && !this.isDisable) {
      this.$minusBtn.addClass('counter__btn_disabled');
      this.isDisable = !this.isDisable;
    } else if (this.numBtnValue > 0 && this.isDisable) {
      this.$minusBtn.removeClass('counter__btn_disabled');
      this.isDisable = !this.isDisable;
    }
  }

  resetForm() {
    this.numBtnValue = 0;
    this.$numBtn.text(0);
    this.toggleDisable();
  }
}

export default Counter;
