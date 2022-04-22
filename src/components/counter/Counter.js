import Observer from '../../observer/Observer';

class Counter {
  constructor($element) {
    this.$element = $element;
    this.observer = new Observer();
    this.init();
    this.bindEventListeners();
    this.toggleDisable();
  }

  init() {
    this.$numButton = $(this.$element).find('.js-counter__number');
    this.numButtonValue = Number(this.$numButton.text());
    this.$minusButton = $(this.$element).find('[data-counter-type="minus"]');
    this.$plusButton = $(this.$element).find('[data-counter-type="plus"]');
    this.isDisable = this.$minusButton.hasClass('counter__button_disabled');
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
    this.observer.notify('change');
  }

  handlePlusButtonClick() {
    this.numButtonValue += 1;
    this.$numButton.html(this.numButtonValue);
    this.toggleDisable();
    this.observer.notify('change');
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
