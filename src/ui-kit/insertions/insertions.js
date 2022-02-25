class Insertions {
  constructor(element) {
    this.element = element;
    this.changeStyle();
  }

  changeStyle() {
    this.element.find('.js-nav__item_checked ').find('.nav__link').css('font-weight', 'bold');
  }
}
