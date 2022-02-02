class Carousel {
  constructor(element) {
    this.element = element;
    this.$itemList = $(this.element).find('.js-carousel__slide-list');
    this.$indicators = $(this.element).find('.js-carousel__indicators-list');
    this.$rightBtn = $(this.element).find('.js-carousel__mover_right');
    this.$leftBtn = $(this.element).find('.js-carousel__mover_left');
    this.moveCarousel();
  }  

  moveCarousel(){
    const el = this;
    this.$leftBtn.on('click', function () {
      el.#slideToLeft(el.$itemList, 'carousel__slide_shown')
      el.#slideToLeft(el.$indicators, 'carousel__indicator_shown')
    });
    this.$rightBtn.on('click', function () {
      el.#slideToRight(el.$itemList, 'carousel__slide_shown')
      el.#slideToRight(el.$indicators, 'carousel__indicator_shown')
    })
  }

  #slideToRight(list, className) {
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

  #slideToLeft(list, className) {
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
}

$(() => {
  $('.js-carousel').each(function () {
    const carousel = new Carousel($(this));
  })
});
