import makeCalendar from '@c/calendar/calendar.js';

$(() => {
  const $cardsCalendarElement = '.calendar__dp_for-cards';
  if ($cardsCalendarElement.length > 0) {
    const cardsCalendar = makeCalendar($cardsCalendarElement);
    cardsCalendar.update({
      selectedDates: ['2019-08-19', '2019-08-23']
    })
  }
});
