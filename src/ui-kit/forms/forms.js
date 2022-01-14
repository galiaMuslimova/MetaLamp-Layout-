import createSlider from '@c/slider/slider.js';

$(() => {
  const $formsSlider = $('.js-slider_forms');
  if ($formsSlider.length > 0) {
    createSlider($formsSlider);
  }  

  $('.js-form__select_expanded').find('.js-drop').addClass('drop_active');
  $('.js-form__expandable_expanded').find('.js-drop').addClass('drop_active');

  const baseElement = $('.js-pagination__anchor_forms');
  const paginationItems = $('.js-catalog-list .js-catalog-item')

  createPagination(baseElement, paginationItems)
});
