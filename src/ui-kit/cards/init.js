import Cards from './Cards.js';

$('.js-cards').each(function () {
  const calendarAnchor = '.js-calendar__dp_for-cards';
  const cards = new Cards($(this), calendarAnchor);
});
