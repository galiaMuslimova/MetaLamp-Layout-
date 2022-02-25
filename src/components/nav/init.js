import Nav from './Nav.js';

$('.js-nav').each(function () {
  const nav = new Nav($(this));
});
