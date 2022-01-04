import makeCalendar from '@c/calendar/calendar.js';

$(() => {
  const $filterCalendar = '.js-datepicker_filter';
  if ($($filterCalendar).length > 0) {
    const datepickerFilter = makeCalendar($filterCalendar);
    const filterDate = ['2019-08-19', '2019-08-23'];
    datepickerFilter.selectDate(filterDate);
    const $inputOpen = $('.js-filter__expandable').find('.js-input__open');
    $inputOpen.on('click', function () {
      $(this).toggleClass('active');
    });
  }
})


