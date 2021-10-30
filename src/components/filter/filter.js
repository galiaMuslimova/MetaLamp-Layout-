import { makeCalendar } from "@c/calendar/calendar.js"


$(".filter").ready(function() {
  let datepicker_filter = makeCalendar(".datepicker_filter");
  let filterDate = ['2019-09-19', '2019-09-23'];
  datepicker_filter.selectDate(filterDate);
})  
