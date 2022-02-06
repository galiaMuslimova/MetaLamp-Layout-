import Calendar from '@c/calendar/calendar.js';
import Slider from '@c/slider/slider.js';

$(() => {
  const $filterCalendarPlace = '.calendar__dp_for-filter';
  if ($($filterCalendarPlace).length > 0) {
    const filterCalendar = new Calendar($filterCalendarPlace);
    const filterDate = ['2019-08-19', '2019-08-23'];   
  }

  const $filterSlider = $('.js-slider_for-filter');
  if ($filterSlider.length > 0) {
    const slider = new Slider($filterSlider)
  }

  const $iconOpen = $('.js-filter__icon');
  $iconOpen.on('click', function () {
    $(this).toggleClass('filter__icon_expanded');
    const $drop = $(this).closest('.filter__expandable-list').find('.js-drop');
    $drop.toggleClass('drop_active');
  });
})


