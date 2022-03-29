import Calendar from '@c/calendar/Calendar.js';

class LogInCard {
  constructor(element, anchor) {
    this.element = element;
    this.logInCardCalendarPlace = anchor;
    this.makeCalendar();
  }

  makeCalendar() {
    if ($(this.logInCardCalendarPlace).length > 0) {
      const logInCardCalendar = new Calendar(this.logInCardCalendarPlace);
      logInCardCalendar.init();
      logInCardCalendar.dp.update({
        multipleDates: false,
        range: false,
        dynamicRange: false,
      });
    }
  }
}

export default LogInCard;
