import Calendar from '@c/calendar/Calendar.js';

class RoomCard {
  constructor(element, anchor) {
    this.element = element;
    this.roomCalendarElement = anchor;
    this.makeCalendar();
  }

  makeCalendar() {
    if ($(this.roomCalendarElement).length > 0) {
      const datepickerRoom = new Calendar(this.roomCalendarElement);
      datepickerRoom.init();
      const roomDate = ['2019-08-19', '2019-08-23'];
      datepickerRoom.dp.selectDate(roomDate);
    }
  }
}

export default RoomCard;
