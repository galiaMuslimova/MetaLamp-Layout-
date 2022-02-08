import Calendar from '@c/calendar/calendar.js';

$(() => {
  const $cardsCalendarElement = '.calendar__dp_for-cards';
  if ($('.calendar__dp_for-cards').length > 0) {
    const cardsCalendar = new Calendar($cardsCalendarElement);
    cardsCalendar.init();
    const cardDate = ['2019-08-19', '2019-08-23'];
    const cardFocusDate = new Date(2019, 7, 8);
    cardsCalendar.dp.selectDate(cardDate);
    cardsCalendar.dp.setFocusDate(cardFocusDate);
  }
});
