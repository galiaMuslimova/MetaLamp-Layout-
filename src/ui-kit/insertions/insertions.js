class Insertions {
  constructor() {
    this.$insertions = $('.js-insertions');
  }

  changeStyle() {
    this.$insertions.find('.js-nav__item_checked ').find('.nav__link').css('font-weight', 'bold');
  }
}
