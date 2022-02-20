import Calendar from '@c/calendar/Calendar.js';

class LoginCard {
  constructor() {
    this.loginCardCalendarPlace = '.js-calendar__dp_for-login-card';
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

const loginCard = new LoginCard();
