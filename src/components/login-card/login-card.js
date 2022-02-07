import Calendar from '@c/calendar/calendar.js';

$(() => {
  const $loginCardCalendarPlace = '.calendar__dp_for-login';
  const loginCardCalendar = new Calendar($loginCardCalendarPlace);
  loginCardCalendar.init();
  loginCardCalendar.dp.update({
    multipleDates: false,
    range: false,
    dynamicRange: false,
  });
});
