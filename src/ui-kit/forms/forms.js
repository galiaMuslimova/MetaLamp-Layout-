import Slider from '@c/slider/slider.js';

$(() => {
  const $formsSlider = $('.js-slider_for-forms');
  if ($formsSlider.length > 0) {
    const slider = new Slider($formsSlider);
    slider.init();
  }

  $('.js-forms__selector_expanded').find('.js-drop').addClass('drop_active');
  $('.js-forms__expandable_expanded').find('.js-drop').addClass('drop_active');
  $('.js-forms__expand-icon').on('click', function () {
    $(this).toggleClass('forms__expand-icon_expanded');
  });

  $('.js-pagination__anchor_for-forms').append(
    $('<div>').addClass('pagination__item').addClass('pagination__item_active').text('1'),
    $('<div>').addClass('pagination__item').text('2'),
    $('<div>').addClass('pagination__item').text('3'),
    $('<div>').addClass('pagination__item').addClass('pagination__item_dots').text('...'),
    $('<div>').addClass('pagination__item').text('15'),
    $('<div>').addClass('pagination__item pagination__item_next').append($('<span>').addClass('pagination__icon').append($('<span>').addClass('icon-arrow'))),
  );
});
