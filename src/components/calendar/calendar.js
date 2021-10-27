import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

$(window).on('load', function () {
  
  let selectedDates = []; 

  function showDateInInput (res) {
    let form = $(dp.$datepicker).closest("form");
    let inputArr = form.find(".input");
    $(inputArr[0]).val(res.formattedDate[0]);
    if (res.formattedDate[1]) {
      $(inputArr[1]).val(res.formattedDate[1]);
    }
  }

  let dp = new AirDatepicker('.calendar', {
    navTitles: {
      days: "MMMM <i>yyyy</i>"
    },
    multipleDates: true,      
    range: true,
    dynamicRange: true,
    autoClose: true,
    prevHtml: '<span class="icon-arrow_back"></span>',
    nextHtml: '<span class="icon-arrow"></span>',
    onSelect: function (res) {
      showDateInInput(res);
      selectedDates = res;
    }
  }); 

  $(".calendar__reset").on("click", function () {
    dp.clear();
  })
})
  
