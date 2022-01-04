import createSlider from '@c/slider/slider.js';

$(() => {
  const $formsSlider = $('.js-slider_forms');
  if ($formsSlider.length > 0) {
    createSlider($formsSlider);
  }  
  $('.js-expanded').find('.js-drop').addClass('active');
});
