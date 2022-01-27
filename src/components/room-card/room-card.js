import makeCalendar from '@c/calendar/calendar.js';

$(() => {
  const $roomCalendarElement = '.calendar__dp_for-room';
  if ($($roomCalendarElement).length > 0) {
    const datepickerRoom = makeCalendar($roomCalendarElement);
    const roomDate = ['2019-08-19', '2019-08-23'];
    datepickerRoom.selectDate(roomDate);
  }
});
