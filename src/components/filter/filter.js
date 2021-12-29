import makeCalendar from '@c/calendar/calendar.js';

$(() => {
  const datepickerFilter = makeCalendar('.js-datepicker_filter');
  const filterDate = ['2019-08-19', '2019-08-23'];
  datepickerFilter.selectDate(filterDate);
  const $inputOpen = $('.js-filter__expandable').find('.js-input__open');
  $inputOpen.on('click', function () {
    $(this).toggleClass('active');
  });
});
