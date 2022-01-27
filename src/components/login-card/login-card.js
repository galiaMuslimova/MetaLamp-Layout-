import makeCalendar from '@c/calendar/calendar.js';

$(() => {
  const $loginCardCalendarPlace = '.calendar__dp_for-login';
  const loginCardCalendar = makeCalendar($loginCardCalendarPlace);
});
