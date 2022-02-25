import Filter from './Filter.js';

$('.js-filter').each(function () {
  const calendarAnchor = '.js-calendar__dp_for-filter';
  const filter = new Filter($(this), calendarAnchor);
});
