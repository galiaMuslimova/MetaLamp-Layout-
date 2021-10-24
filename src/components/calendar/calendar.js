import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

$(window).on('load', function () {
  let submitButton = {
    content: "Применить",
    className: "calendar__submit",
    onClick: (dp) => {
      let date = new onSelect();
      dp.selectDate(date);
      dp.setViewDate(date);
    }
  }

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
      days: '<strong>MMMM </strong> <strong> yyyy</strong>'
    },
    multipleDates: true,      
    range: true,
    dynamicRange: true,
    autoClose: true,
    onSelect: function (res) {
      showDateInInput(res);
    },
    buttons: ["clear", submitButton],
  }); 
})
  
