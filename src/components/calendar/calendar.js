import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

export default class Calendar {
  constructor(element) {
    this.element = element;
    this.$form = $(this.element).closest('form');
    this.$drop = this.$form.find('.js-drop');
    this.$inputArr = this.$form.find('.input__field');
    this.dp = {};
  }

  init() {
    const el = this;
    this.dp = new AirDatepicker(this.element, {
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

    $('.js-calendar__btn_for-reset').on('click', () => {
      el.dp.clear();
    });

    $('.js-calendar__btn_for-submit').on('click', () => {
      el.$drop.removeClass('drop_active');
    });
  }

  showDateInInput(res) {
    if (this.element === '.calendar__dp_for-filter') {
      const date1 = this.dp.formatDate(res.date[0], 'dd MMM');
      const date2 = this.dp.formatDate(res.date[1], 'dd MMM');
      const str = `${date1} - ${date2}`;
      $(this.$inputArr[0]).val(str.toLowerCase());
    } else if (this.element === '.calendar__dp_for-login') {
      $(this.$inputArr[0]).val(res.formattedDate);
    } else {
      $(this.$inputArr[0]).val(res.formattedDate[0]);
      $(this.$inputArr[1]).val(res.formattedDate[1]);
    }
  }
}
