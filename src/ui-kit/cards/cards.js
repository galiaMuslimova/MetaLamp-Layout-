import makeCalendar from '@c/calendar/calendar.js';

$(() => {
  const $cardsCalendarElement = $('.js-datepicker_cards');
  if ($cardsCalendarElement.length > 0) {
    const cardsCalendar = makeCalendar($cardsCalendarElement);
    cardsCalendar.update({ onSelect: false });
    cardsCalendar.setFocusDate('2019-08-08');
    cardsCalendar.selectDate(['2019-08-19', '2019-08-23']);
  }
});
