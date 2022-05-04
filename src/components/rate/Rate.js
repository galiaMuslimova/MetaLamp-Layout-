class Rate {
  constructor($root) {
    this.$root = $root;
    this.init();
    this.bindEventListeners();
  }

  init() {
    this.$element = this.$root.find('.js-rate');
    this.$stars = this.$element.find('.js-rate__star');
  }

  bindEventListeners() {
    this.$stars.on('click', this.handleRateStarClick);
  }

  handleRateStarClick() {
    let prevStar = $(this).prev();
    let nextStar = $(this).next();
    while (prevStar.length > 0) {
      prevStar.addClass('rate__star_colored');
      prevStar = prevStar.prev();
    }
    while (nextStar.length > 0) {
      nextStar.removeClass('rate__star_colored');
      nextStar = nextStar.next();
    }
    $(this).addClass('rate__star_colored');
  }
}

export default Rate;
