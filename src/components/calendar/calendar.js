import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

$(function () {  
  let selectedDates = [];   

  function showDateInInput (res, dp, element) {    
    let form = $(dp.$datepicker).closest("form");
    let inputArr = form.find(".input");
    if (element == ".datepicker_filter") {
      console.log(res);
      let date1 = dp.formatDate(res.date[0], 'dd MMM');
      let date2 = dp.formatDate(res.date[1], 'dd MMM');
      let str = date1 + ' - ' +  date2;
      $(inputArr[0]).val(str.toLowerCase());
    } else {
      $(inputArr[0]).val(res.formattedDate[0]);
      if (res.formattedDate[1]) {
        $(inputArr[1]).val(res.formattedDate[1]);
      }
    }    
  }

  function makeCalendar(element) {
    let dp = new AirDatepicker(element, {
      navTitles: {
        days: "MMMM <i>yyyy</i>"
      },
      multipleDates: true,
      range: true,
      dynamicRange: true,
      prevHtml: '<span class="icon-arrow_back"></span>',
      nextHtml: '<span class="icon-arrow"></span>',
      onSelect: function (res) {
        showDateInInput(res, dp, element);
        selectedDates = res;
      }
    });
    return dp;
  }

  let datepicker_entry = makeCalendar(".datepicker_entry");
  
  let datepicker_filter = makeCalendar(".datepicker_filter");
  let filterDate = ['Thu Aug 19 2021 00:00:00 GMT+0500', 'Mon Aug 23 2021 00:00:00 GMT+0500'];
  datepicker_filter.selectDate(filterDate);  

  $(".calendar__reset").on("click", function () {
    datepicker_entry.clear();
  })
})
  
