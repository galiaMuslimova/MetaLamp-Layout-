import Burger from './Burger.js';

$('.js-burger').each(function () {
  const burger = new Burger($(this));
});
