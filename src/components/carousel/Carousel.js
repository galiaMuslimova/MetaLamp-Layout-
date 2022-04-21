class Carousel {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-carousel');
    this.$slidesList = this.$element.find('.js-carousel__slide-list');
    this.$indicatorsList = this.$element.find('.js-carousel__indicators-list');
    this.$rightButton = this.$element.find('.js-carousel__mover_right');
    this.$leftButton = this.$element.find('.js-carousel__mover_left');
    this.init();
    this.bindEventListeners();
  }

  init() {
    const $slides = this.$slidesList.find('.js-carousel__slide');
    const firstSlide = $slides[0];
    $(firstSlide).addClass('carousel__slide_shown');
    const $indicators = this.$indicatorsList.find('.js-carousel__indicator');
    const firstIndicator = $indicators[0];
    $(firstIndicator).addClass('carousel__indicator_shown');
  }

  static slideToRight(list, className) {
    const $activeItem = $(list).find('[class$="shown"]');
    if ($activeItem.next()[0] !== undefined) {
      const $nextItem = $activeItem.next();
      $nextItem.addClass(className);
    } else {
      const $firstItem = $(list).children().first();
      $firstItem.addClass(className);
    }
    $activeItem.removeClass(className);
  }

  static slideToLeft(list, className) {
    const $activeItem = list.find('[class$="shown"]');
    if ($activeItem.prev()[0] !== undefined) {
      const $prevItem = $activeItem.prev();
      $prevItem.addClass(className);
    } else {
      const $lastItem = list.children().last();
      $lastItem.addClass(className);
    }
    $activeItem.removeClass(className);
  }

  bindEventListeners() {
    this.$leftButton.on('click', this.handleLeftButtonClick.bind(this));
    this.$rightButton.on('click', this.handleRightButtonClick.bind(this));
  }

  handleLeftButtonClick() {
    Carousel.slideToLeft(this.$slidesList, 'carousel__slide_shown');
    Carousel.slideToLeft(this.$indicatorsList, 'carousel__indicator_shown');
  }

  handleRightButtonClick() {
    Carousel.slideToRight(this.$slidesList, 'carousel__slide_shown');
    Carousel.slideToRight(this.$indicatorsList, 'carousel__indicator_shown');
  }

  setFocus() {
    this.$element.addClass('carousel_focused');
  }
}

export default Carousel;
