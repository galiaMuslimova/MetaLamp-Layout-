$(document).ready(() => {
  $('.js-carousel__mover').on('click', function () {
    const $images = $(this).siblings('.js-carousel__slide-list');
    const $indicators = $(this).siblings('.js-carousel__indicators-list');

    function slideToRight({itemList, className}) {
      const $activeItem = itemList.find('[class$="shown"]');
      if ($activeItem.next()[0] !== undefined) {
        const $nextItem = $activeItem.next();
        $nextItem.addClass(className);
      } else {
        const $firstItem = itemList.children().first();
        $($firstItem).addClass(className);
      }
      $activeItem.removeClass(className);
    }

    function slideToLeft({itemList, className}) {
      const $activeItem = itemList.find('[class$="shown"]');
      if ($activeItem.prev()[0] !== undefined) {
        const $prevItem = $activeItem.prev();
        $prevItem.addClass(className);
      } else {
        const $lastItem = itemList.children().last();
        $($lastItem).addClass(className);
      }
      $activeItem.removeClass(className);
    }

    if ($(this).hasClass('js-carousel__mover_right')) {
      slideToRight({ itemList: $images, className: 'carousel__slide_shown'});
      slideToRight({ itemList: $indicators, className: 'carousel__indicator_shown' });
    }

    if ($(this).hasClass('js-carousel__mover_left')) {
      slideToLeft({ itemList: $images, className: 'carousel__slide_shown'});
      slideToLeft({ itemList: $indicators, className: 'carousel__indicator_shown' });
    }
  });
});
