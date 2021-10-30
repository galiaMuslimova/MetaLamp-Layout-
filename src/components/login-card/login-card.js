import { makeCalendar } from "@c/calendar/calendar.js";

$(function () {
  $(".datepicker_login").closest("form").find(".input-row").on("click", function(){
    $(this).siblings(".drop").toggleClass("active")
  })
  let datepicker_login = makeCalendar(".datepicker_login");
});