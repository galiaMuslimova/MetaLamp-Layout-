import makeCalendar from '@c/calendar/calendar.js';

$(() => {
  const datepickerRoom = makeCalendar('.js-datepicker_room');
  const roomDate = ['2019-08-19', '2019-08-23'];
  datepickerRoom.selectDate(roomDate);
});
