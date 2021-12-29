$(document).ready(() => {
  $('.js-carousel__mover').on('click', function () {
    const $images = $(this).siblings('.js-carousel__image');
    const $indicators = $(this).siblings('.js-carousel__indicators');

    function slideToRight(itemList) {
      const $activeItem = itemList.find('.js-shown');
      if ($activeItem.next()[0] !== undefined) {
        const $nextItem = $activeItem.next();
        $nextItem.addClass('shown js-shown');
      } else {
        const $firstItem = itemList.children().first();
        $($firstItem).addClass('shown js-shown');
      }
      $activeItem.removeClass('shown js-shown');
    }

    function slideToLeft(itemList) {
      const $activeItem = itemList.find('.js-shown');
      if ($activeItem.prev()[0] !== undefined) {
        const $prevItem = $activeItem.prev();
        $prevItem.addClass('shown js-shown');
      } else {
        const $lastItem = itemList.children().last();
        $($lastItem).addClass('shown js-shown');
      }
      $activeItem.removeClass('shown js-shown');
    }

    if ($(this).hasClass('js-carousel__mover_right')) {
      slideToRight($images);
      slideToRight($indicators);
    }

    if ($(this).hasClass('js-carousel__mover_left')) {
      slideToLeft($images);
      slideToLeft($indicators);
    }
  });
});
