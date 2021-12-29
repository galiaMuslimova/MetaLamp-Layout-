import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

function showDateInInput(res, dp, element) {
  const $form = $(dp.$datepicker).closest('form');
  const $inputArr = $form.find('.input');
  if (element === '.js-datepicker_filter') {
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
    prevHtml: '<span class="icon-arrow_back"></span>',
    nextHtml: '<span class="icon-arrow"></span>',
    onSelect(res) {
      showDateInInput(res, dp, element);
    },
  });
  $(() => {
    $('.js-calendar__reset').on('click', () => {
      dp.clear();
    });
  });
  return dp;
}

export default makeCalendar;
