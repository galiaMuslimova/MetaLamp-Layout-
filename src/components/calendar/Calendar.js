import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

class Calendar {
  constructor(dateType, id, input) {
    this.dateType = dateType;
    this.id = id;
    this.anchor = `.js-calendar__dp_for-${this.id}`;
    this.input = input;
    this.$inputArr = this.input ? this.input.$inputField : undefined;
    this.dp = {};
    this.init();
  }

  init() {
    if ($(this.anchor)[0]) {
      this.createDatePicker();
    }
  }

  createDatePicker() {
    const el = this;
    this.dp = new AirDatepicker(this.anchor, {
      navTitles: {
        days: 'MMMM <i class="calendar__year">yyyy</i>',
      },
      startDate: new Date(2019, 7, 19),
      multipleDates: true,
      range: true,
      dynamicRange: true,
      prevHtml: '<div class="calendar__arrow"><span class="icon-arrow_back"></span></div>',
      nextHtml: '<div class="calendar__arrow"><span class="icon-arrow"></span></div>',
      onSelect(res) {
        el.showDateInInput(res);
      },
    });
    if (this.dateType === 'single') {
      const options = {
        multipleDates: false,
        range: false,
        dynamicRange: false,
      };
      this.dp.update(options);
    }
  }

  resetCalendar() {
    this.dp.clear();
    this.showDateInInput({
      date: [undefined, undefined],
      formattedDate: [undefined, undefined],
    });
  }

  showDateInInput(res) {
    if (this.dateType === 'pair') {
      const date1 = this.dp.formatDate(res.date[0], 'dd MMM');
      const date2 = this.dp.formatDate(res.date[1], 'dd MMM');
      const str = `${date1} - ${date2}`;
      $(this.$inputArr[0]).val(str.toLowerCase());
    } else if (this.dateType === 'single') {
      $(this.$inputArr[0]).val(res.formattedDate);
    } else if (this.dateType === 'double') {
      $(this.$inputArr[0]).val(res.formattedDate[0]);
      $(this.$inputArr[1]).val(res.formattedDate[1]);
    }
  }
}

export default Calendar;
