import createSlider from '@c/slider/slider.js';

$(() => {
  const $formsSlider = $('.js-slider_for-forms');
  if ($formsSlider.length > 0) {
    createSlider($formsSlider);
  }  

  $('.js-forms__select_expanded').find('.js-drop').addClass('drop_active');
  $('.js-forms__expandable_expanded').find('.js-drop').addClass('drop_active');
  $('.js-forms__expand-icon').on('click', function(){
    $(this).toggleClass('forms__expand-icon_expanded');
  })  

  function createFormsPagination(el){
    $(el).append(
      $('<div>').addClass('pagination__item').addClass('pagination__item_active').text('1'),
      $('<div>').addClass('pagination__item').text('2'),
      $('<div>').addClass('pagination__item').text('3'),
      $('<div>').addClass('pagination__item').addClass('pagination__item_dots').text('...'),
      $('<div>').addClass('pagination__item').text('15'),
      $('<div>').addClass('pagination__item pagination__item_next').append($('<span>').addClass('pagination__icon').append($('<span>').addClass('icon-arrow')))
    );
  }

  const baseElement = $('.js-pagination__anchor_for-forms');
  createFormsPagination(baseElement)
});
