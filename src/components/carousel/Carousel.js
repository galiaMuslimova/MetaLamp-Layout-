class Carousel {
  constructor(element) {
    this.element = element;
    this.$itemList = $(this.element).find('.js-carousel__slide-list');
    this.$indicators = $(this.element).find('.js-carousel__indicators-list');
    this.$rightButton = $(this.element).find('.js-carousel__mover_right');
    this.$leftButton = $(this.element).find('.js-carousel__mover_left');
    this.bindEventListeners();
  }

  static slideToRight(list, className) {
    const $activeItem = $(list).find('[class$="shown"]');
    if ($activeItem.next()[0] !== undefined) {
      const $nextItem = $activeItem.next();
      $nextItem.addClass(className);
    } else {
      const $firstItem = $(list).children().first();
      $($firstItem).addClass(className);
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
      $($lastItem).addClass(className);
    }
    $activeItem.removeClass(className);
  }

  bindEventListeners() {
    this.$leftButton.on('click', this.handleLeftButtonClick.bind(this));
    this.$rightButton.on('click', this.handleRightButtonClick.bind(this));
  }

  handleLeftButtonClick() {
    Carousel.slideToLeft(this.$itemList, 'carousel__slide_shown');
    Carousel.slideToLeft(this.$indicators, 'carousel__indicator_shown');
  }

  handleRightButtonClick() {
    Carousel.slideToRight(this.$itemList, 'carousel__slide_shown');
    Carousel.slideToRight(this.$indicators, 'carousel__indicator_shown');
  }
}

export default Carousel;
