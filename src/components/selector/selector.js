import Counter from '../counter/Counter.js';

class Selector {
  constructor(element) {
    this.element = element;
    this.$selectForm = $(this.element).closest('.js-form');
    this.$input = this.$selectForm.find('.js-input__field');
    this.$drop = this.$selectForm.find('.js-drop');
    this.$buttons = $(this.element).find('.js-counter__btn');
    this.$resetBtn = this.$selectForm.find('.js-selector__reset-btn');
    this.$submitBtn = this.$selectForm.find('.js-selector__submit-btn');
    this.counters = this.makeCounters();
    this.valuesArray = this.takeNumsArray();
    this.init();
  }

  init() {
    this.changeCount();
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$buttons.on('click', this.changeCount.bind(this));
    this.$resetBtn.on('click', this.resetForm.bind(this));
    this.$submitBtn.on('click', this.handleDropClassActiveRemove.bind(this));
  }

  makeCounters() {
    const counters = [];
    const $counters = $(this.element).find('.counter');
    $counters.each(function () {
      const counter = new Counter($(this));
      counter.init();
      counters.push(counter);
    });
    return counters;
  }

  changeCount() {
    this.valuesArray = this.takeNumsArray();
    this.changeInputText();
    const result = this.valuesArray.reduce((sum, elem) => sum + elem, 0);
    const isResetBtnActive = this.$resetBtn.hasClass('selector__reset-btn_active');
    if (result > 0 && !isResetBtnActive) {
      this.$resetBtn.addClass('selector__reset-btn_active');
    } else if (result < 1 && isResetBtnActive) {
      this.$resetBtn.removeClass('selector__reset-btn_active');
    }
  }

  resetForm() {
    this.counters.forEach((counter) => {
      counter.resetForm();
    });
    this.valuesArray = this.takeNumsArray();
    this.changeInputText();
  }

  handleDropClassActiveRemove() {
    this.$drop.removeClass('drop_active');
  }

  changeInputText() {
    let str;
    if (this.$drop.hasClass('drop_for-guests')) {
      str = this.createGuestsText();
    }
    if (this.$drop.hasClass('drop_for-placement')) {
      str = this.createPlacementText();
    }
    this.$input.val(str);
  }

  takeNumsArray() {
    return this.counters.map((counter) => counter.numBtnValue);
  }

  static declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    const isTwo = number % 100 > 4 && number % 100 < 20;
    return titles[isTwo ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  createGuestsText() {
    const adultsNum = this.valuesArray[0] + this.valuesArray[1];
    const adultsText = this.constructor.declOfNum(adultsNum, ['гость', 'гостя', 'гостей']);
    const adults = `${adultsNum} ${adultsText}`;

    const babiesNum = this.valuesArray[2];
    const babiesText = this.constructor.declOfNum(babiesNum, ['младенец', 'младенца', 'младенцев']);
    const babies = `${babiesNum} ${babiesText}`;

    let str;
    if (adultsNum === 0) {
      str = 'Сколько гостей';
    } else
    if (babiesNum === 0) {
      str = adults;
    } else {
      str = `${adults}, ${babies}`;
    }
    return str;
  }

  createPlacementText() {
    const bedroomsNum = this.valuesArray[0];
    const bedroomsText = this.constructor.declOfNum(bedroomsNum, ['спальня', 'спальни', 'спален']);
    const bedrooms = `${bedroomsNum} ${bedroomsText}`;

    const bedsNum = this.valuesArray[1];
    const bedsText = this.constructor.declOfNum(bedsNum, ['кровать', 'кровати', 'кроватей']);
    const beds = `${bedsNum} ${bedsText}`;

    let str;
    if (bedroomsNum === 0) {
      str = 'Сколько спален';
    } else {
      str = `${bedrooms}, ${beds}...`;
    }
    return str;
  }
}

$(() => {
  $('.js-selector').each(function () {
    const selector = new Selector(this);
    selector.init();
  });
});
