import Counter from '@c/counter/counter.pug'

class Selector {
  constructor(element) {
    this.element = element;
    this.$selectForm = $(this.element).closest('form');
    this.$input = this.$selectForm.find('.js-input__field');
    this.$drop = this.$selectForm.find('.js-drop');
    this.numsArray = this.takeNumsArray();
    this.counters = [];
  }

  init() {
    this.element.find('.counter').each(function () {
      const counter = new Counter(this);
      this.counters.push(counter);
    })
    let str;
    if (this.$drop.hasClass('drop_for-guests')) {
      str = createGuestsText();
      showHideResetButton();
    }
    if ($drop.hasClass('drop_for-placement')) {
      str = createPlacementText();      
    }
    this.$input.val(str);
  }

  takeNumsArray() {
    const $items = this.$selectForm.find('.js-counter__num');
    const values = $items.map((x) => $($items[x]).val());
    return ([Number(values[0]), Number(values[1]), Number(values[2])]);
  }

  declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    const isTwo = number % 100 > 4 && number % 100 < 20;
    return titles[isTwo ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  createGuestsText() {
    const adultsNum = this.numsArray[0] + this.numsArray[1];
    const adultsText = this.declOfNum(adultsNum, ['гость', 'гостя', 'гостей']);
    const adults = `${adultsNum} ${adultsText}`;

    const babiesNum = this.numsArray[2];
    const babiesText = this.declOfNum(babiesNum, ['младенец', 'младенца', 'младенцев']);
    const babies = `${babiesNum}, ${babiesText}`

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
    const bedroomsNum = this.numsArray[0];
    const bedroomsText = declOfNum(bedroomsNum, ['спальня', 'спальни', 'спален'])
    const bedrooms = `${bedroomsNum} ${bedroomsText}`;

    const bedsNum = this.numsArray[1];
    const bedsText = declOfNum(bedsNum, ['кровать', 'кровати', 'кроватей']);
    const beds = `${bedsNum} ${bedsText}`;

    let str;
    if (bedroomsNum === 0) {
      str = 'Сколько спален';
    } else {
      str = `${bedrooms}, ${beds}...`;
    }
    return str;
  }

  showHideResetButton() {
    const result = this.numsArray.reduce((sum, elem) => sum + elem, 0);
    const $reset = this.$selectForm.find('.js-selector__reset-btn');
    if (result > 0) {
      $reset.addClass('selector__reset-btn_active');
    } else {
      $reset.removeClass('selector__reset-btn_active');
    }
  }

  

  

  
}



$(() => {
  $('.js-selector').each(function () {
    new Selector(this)
  })

  $('.js-selector__reset-btn').on('click', function () {
    const $selectForm = $(this).closest('form');
    const $countNums = $selectForm.find('.js-counter__num');
    const $minus = $selectForm.find('.js-count__btn_with-minus');
    $countNums.each(function () {
      $(this).val(0);
    });
    $minus.each(function () {
      $(this).addClass('counter__btn_disabled');
    });
    showHideResetButton($selectForm);
  });

  $('.js-selector__submit-btn').on('click', function () {
    const $selectForm = $(this).closest('form');
    const $drop = $selectForm.find('.js-drop');
    $drop.removeClass('drop_active');
  });
});


