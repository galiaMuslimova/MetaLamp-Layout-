import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

$(window).on('load', function () {
  let calendar = new AirDatepicker('#calendar', {
    multipleDates: true,      
    range: true,
    dynamicRange: true,
    autoClose: true,
    onSelect: function (res) {
      sessionStorage.setItem('dates', res.date);
      $('#entry-input_left').val(res.formattedDate[0]);
      $('#entry-input_right').val(res.formattedDate[1]);
    }
  });     
})
  
