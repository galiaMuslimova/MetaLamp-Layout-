import makeCalendar from '@c/calendar/calendar.js';

$(() => {
  const cardsCalendar = makeCalendar('.js-datepicker_cards');
  cardsCalendar.update({ onSelect: false });
  cardsCalendar.setFocusDate('2019-08-08');
  cardsCalendar.selectDate(['2019-08-19', '2019-08-23']);
});
