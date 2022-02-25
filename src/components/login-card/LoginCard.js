import Calendar from '@c/calendar/Calendar.js';

class LoginCard {
  constructor(element, anchor) {
    this.element = element;
    this.loginCardCalendarPlace = anchor;
    this.makeCalendar();
  }

  makeCalendar() {
    if ($(this.loginCardCalendarPlace).length > 0) {
      const loginCardCalendar = new Calendar(this.loginCardCalendarPlace);
      loginCardCalendar.init();
      loginCardCalendar.dp.update({
        multipleDates: false,
        range: false,
        dynamicRange: false,
      });
    }
  }
}

export default LoginCard;
