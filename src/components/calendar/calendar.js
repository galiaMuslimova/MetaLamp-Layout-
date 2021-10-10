import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

$(window).on('load', function () {
  let calendar = new AirDatepicker('#calendar', {
    navTitles: {
      days: '<strong>MMMM </strong> <strong> yyyy</strong>'
    },
    multipleDates: true,      
    range: true,
    dynamicRange: true,
    autoClose: true,
    onSelect: function (res) {
      sessionStorage.setItem('date-start', res.formattedDate[0]);
      sessionStorage.setItem('date-end', res.formattedDate[1]);
      //$('#entry-input_left').val(res.formattedDate[0]);
      //$('#entry-input_right').val(res.formattedDate[1]);
    }
  }); 

  $('.drop_calendar').find('.submit').click(function () {
    $('#entry-input_left').val(sessionStorage.getItem('date-start'));
    $('#entry-input_right').val(sessionStorage.getItem('date-end'));
  });

  $('.drop_calendar').find('.reset').click(function () {
    $('#entry-input_left').val('ДД.ММ.ГГГГ');
    $('#entry-input_right').val('ДД.ММ.ГГГГ');
    calendar.clear();
  })
})
  
