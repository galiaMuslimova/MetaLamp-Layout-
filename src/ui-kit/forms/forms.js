import createSlider from '@c/slider/slider.js';

$(() => {
  createSlider($('.js-slider_forms'));
  $('.js-expanded').find('.js-drop').addClass('active');
});
