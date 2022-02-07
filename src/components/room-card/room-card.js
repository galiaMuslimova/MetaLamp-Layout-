import Calendar from '@c/calendar/calendar.js';

$(() => {
  const $roomCalendarElement = '.calendar__dp_for-room';
  if ($($roomCalendarElement).length > 0) {
    const datepickerRoom = new Calendar($roomCalendarElement);
    datepickerRoom.init();
    const roomDate = ['2019-08-19', '2019-08-23'];
    datepickerRoom.dp.selectDate(roomDate);
  }
});
