export default class Counter {
  constructor(element) {
    this.element = element;
    this.$numBtn = $(this.element).find('.js-counter__num');
    this.numBtnValue = Number(this.$numBtn.val());
    this.$minusBtn = $(this.element).find('.js-counter__btn_with-minus');
    this.$plusBtn = $(this.element).find('.js-counter__btn_with-plus');
    this.isDisable = this.$minusBtn.hasClass('counter__btn_disabled');
  }

  init() {
    this.clickMinusBtn();
    this.clickPlusBtn();
    this.toggleDisable();
  }

  clickMinusBtn() {
    const el = this;  
    this.$minusBtn.on('click', function () {
      if (el.numBtnValue > 0) {
        el.numBtnValue -= 1;
        el.$numBtn.val(el.numBtnValue);
      }
      el.toggleDisable();
    });    
  }

  clickPlusBtn() {
    const el = this;
    this.$plusBtn.on('click', function () {
      el.numBtnValue += 1;
      el.$numBtn.val(el.numBtnValue);
      el.toggleDisable();
    });    
  }

  toggleDisable(){
    if (this.numBtnValue < 1 && !this.isDisable) {
      this.$minusBtn.addClass('counter__btn_disabled');
      this.isDisable = !this.isDisable;
    } else if (this.numBtnValue > 0 && this.isDisable) {
      this.$minusBtn.removeClass('counter__btn_disabled');
      this.isDisable = !this.isDisable;
    }
  }
}
