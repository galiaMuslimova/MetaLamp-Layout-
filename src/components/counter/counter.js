export default class Counter {
  constructor(element) {
    this.element = element;
    this.$numBtn = $(this.element).find('.js-counter__num');
    this.numValue = Number($countNum.val());
    this.init();
  }

  init() {
    this.toggleDisable();
    this.clickButtons()
  }

  clickButtons() {
    $('.js-counter__btn_with-plus, .js-counter__btn_with-minus').on('click', function () {
      
      this.changeNumValue($(this));
      this.toggleDisable($(this));
      

      if ($selectDrop.hasClass('drop_for-placement')) {
        const str = createPlacementText($selectForm);
        $selectForm.find('.js-input__field').val(str);
      }
      if ($selectDrop.hasClass('drop_for-guests')) {
        const str = createGuestsText($selectForm);
        $selectForm.find('.js-input__field').val(str);
      }
    });
  }

  changeNumValue(button) {
    if (button.hasClass('js-counter__btn_with-plus')) {
      this.$numBtn.val(this.numValue += 1);
    }
    if (button.hasClass('js-counter__btn_with-minus') && this.inputValue > 0) {
      this.$numBtn.val(this.numValue -= 1);
    }
  }

  toggleDisable() {
    const isDisable = this.$minusBtn.hasClass('counter__btn_disabled');
    if (this.numValue > 0 && isDisable) {
      this.$minusBtn.removeClass('counter__btn_disabled');
    } else if (this.numValue < 1 && !isDisable) {
      this.$minusBtn.addClass('counter__btn_disabled');
    }
  }
}
