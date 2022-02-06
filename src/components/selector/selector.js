import Counter from '../counter/counter.js'

class Selector {
  constructor(element) {
    this.element = element;
    this.$selectForm = $(this.element).closest('form');
    this.$input = this.$selectForm.find('.js-input__field');
    this.$drop = this.$selectForm.find('.js-drop');
    this.$resetBtn = this.$selectForm.find('.js-selector__reset-btn');
    this.$submitBtn = this.$selectForm.find('.js-selector__submit-btn');
    this.counters = [];
    this.valuesArray = [];
    this.init()
  }

  init() {
    const el = this;
    $(this.element).find('.counter').each(function () {
      let counter = new Counter($(this));
      counter.init()
      el.counters.push(counter);
    })

    this.valuesArray = this.takeNumsArray();
    this.changeCount();
    this.clickResetBtn();
    this.clickSubmitBtn();
    this.clickButton();
  }

  clickButton() {
    const el = this;
    const $buttons = $(this.element).find('.js-counter__btn');
    $buttons.each(function () {
      $(this).on('click', function () {
        el.changeCount()
      })
    })
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

  clickResetBtn() {
    const el = this;
    this.$resetBtn.on('click', function () {
      for (const counter of el.counters) {
        counter.numBtnValue = 0;
        counter.toggleDisable()
      }
      el.$resetBtn.removeClass('selector__reset-btn_active');
      el.changeInputText();
    });
  }

  clickSubmitBtn() {
    const el = this;
    this.$submitBtn.on('click', function () {
      el.$drop.removeClass('drop_active');
    });
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

  declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    const isTwo = number % 100 > 4 && number % 100 < 20;
    return titles[isTwo ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  createGuestsText() {
    const adultsNum = this.valuesArray[0] + this.valuesArray[1];
    const adultsText = this.declOfNum(adultsNum, ['гость', 'гостя', 'гостей']);
    const adults = `${adultsNum} ${adultsText}`;

    const babiesNum = this.valuesArray[2];
    const babiesText = this.declOfNum(babiesNum, ['младенец', 'младенца', 'младенцев']);
    const babies = `${babiesNum} ${babiesText}`

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
    const bedroomsText = this.declOfNum(bedroomsNum, ['спальня', 'спальни', 'спален'])
    const bedrooms = `${bedroomsNum} ${bedroomsText}`;

    const bedsNum = this.valuesArray[1];
    const bedsText = this.declOfNum(bedsNum, ['кровать', 'кровати', 'кроватей']);
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
    new Selector(this)
  })
});


