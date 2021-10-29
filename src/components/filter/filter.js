import { makeCalendar } from "@c/calendar/calendar.js"

$(function(){
  let datepicker_filter = makeCalendar(".datepicker_filter");
  let filterDate = ['Thu Aug 19 2021 00:00:00 GMT+0500', 'Mon Aug 23 2021 00:00:00 GMT+0500'];
  datepicker_filter.selectDate(filterDate);
})