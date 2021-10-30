import { makeCalendar } from "@c/calendar/calendar.js";

$(function () {
  let datepicker_room = makeCalendar(".datepicker_room");
  let roomDate = ['2019-08-19', '2019-08-23'];
  datepicker_room.selectDate(roomDate);
  console.log(datepicker_room.onSelect())
});

