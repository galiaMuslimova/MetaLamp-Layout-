import Carousel from './Carousel.js';

$(() => {
  $('.js-carousel').each(function () {
    const carousel = new Carousel($(this));
  });
});
