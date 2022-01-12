import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

function showDateInInput(res, dp, element) {
  const $form = $(dp.$datepicker).closest('form');
  const $inputArr = $form.find('.input__field');
  if (element === '.calendar__dp_filter') {
    const date1 = dp.formatDate(res.date[0], 'dd MMM');
    const date2 = dp.formatDate(res.date[1], 'dd MMM');
    const str = `${date1} - ${date2}`;
    $($inputArr[0]).val(str.toLowerCase());
  } else {
    $($inputArr[0]).val(res.formattedDate[0]);
    if (res.formattedDate[1]) {
      $($inputArr[1]).val(res.formattedDate[1]);
    }
  }
}

function makeCalendar(element) {
  const dp = new AirDatepicker(element, {
    navTitles: {
      days: 'MMMM <i>yyyy</i>',
    },
    multipleDates: true,
    range: true,
    dynamicRange: true,
    prevHtml: '<div class="calendar__arrow"><span class="icon-arrow_back"></span></div>',
    nextHtml: '<div class="calendar__arrow"><span class="icon-arrow"></span></div>',
    onSelect(res) {
      showDateInInput(res, dp, element);
    },
  });

  return dp;
}


$('.js-calendar__reset').on('click', () => {
  dp.clear();
});

$('.js-calendar__submit').on('click', function () {
  const $selectForm = $(this).closest('form');
  const $drop = $selectForm.find('.js-drop');
  $drop.removeClass('drop_active');
});


export default makeCalendar;
