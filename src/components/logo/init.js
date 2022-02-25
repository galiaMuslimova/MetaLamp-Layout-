import Logo from './Logo.js';

$('.js-logo').each(function () {
  const logo = new Logo($(this));
});
