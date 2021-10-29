import { makeCalendar } from "@c/calendar/calendar.js";

$(function () {
  $(".entry-card").find(".btn_link").on("click", function () {
    $(location).attr('href', "./catalog.html");    
  });

  let datepicker_entry = makeCalendar(".datepicker_entry");
});