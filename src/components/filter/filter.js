import makeCalendar from '@c/calendar/calendar.js';
import createSlider from '@c/slider/slider.js';

$(() => {
  const $filterCalendarPlace = '.calendar__dp_filter';
  if ($($filterCalendarPlace).length > 0) {
    const filterCalendar = makeCalendar($filterCalendarPlace);
    const filterDate = ['2019-08-19', '2019-08-23'];
    filterCalendar.selectDate(filterDate);    
  }

  const $filterSlider = $('.js-slider_filter');
  if ($filterSlider.length > 0) {
    createSlider($filterSlider)
  }

  const $iconOpen = $('.js-filter__icon');
  $iconOpen.on('click', function () {
    $(this).toggleClass('filter__icon_expanded');
    const $drop = $(this).closest('.filter__expandable').find('.js-drop');
    $drop.toggleClass('drop_active');
  });
})


