import Calendar from '@c/calendar/calendar.js';

$(() => {
  const $cardsCalendarElement = '.calendar__dp_for-cards';
  if ($cardsCalendarElement.length > 0) {
    const cardsCalendar = new Calendar($cardsCalendarElement);
  }
});
