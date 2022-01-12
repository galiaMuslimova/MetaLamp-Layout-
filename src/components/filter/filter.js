import makeCalendar from '@c/calendar/calendar.js';

$(() => {
  const $filterCalendarPlace = '.calendar__dp_filter';
  if ($($filterCalendarPlace).length > 0) {
    const filterCalendar = makeCalendar($filterCalendarPlace);
    const filterDate = ['2019-08-19', '2019-08-23'];
    filterCalendar.selectDate(filterDate);    
  }
})


