import Calendar from '@c/calendar/Calendar.js';

class RoomCard {
  constructor() {
    this.roomCalendarElement = '.calendar__dp_for-room';
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

const roomCard = new RoomCard();
