import Calendar from '@c/calendar/calendar.js';

$(() => {
  const $loginCardCalendarPlace = '.calendar__dp_for-login';
  const loginCardCalendar = new Calendar($loginCardCalendarPlace);
  loginCardCalendar.init();
  if ($('.calendar__dp_for-login').length > 0) {
    loginCardCalendar.dp.update({
      multipleDates: false,
      range: false,
      dynamicRange: false,
    });
  }
});
