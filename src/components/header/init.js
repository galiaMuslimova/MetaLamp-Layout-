import Header from './Header.js';

$('.js-header').each(function () {
  const header = new Header($(this));
});
