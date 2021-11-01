import { makeCalendar } from "@c/calendar/calendar.js"

$(".filter").ready(function() {
  let datepicker_filter = makeCalendar(".datepicker_filter");
  let filterDate = ['2019-08-19', '2019-08-23'];
  datepicker_filter.selectDate(filterDate);
})  
