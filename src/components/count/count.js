import { createPlacementText, createGuestsText, showHideResetButton } from '@c/select/select.js';

$(document).ready(() => {
  const $countNums = $('.js-count__num');
  $countNums.each(function () {
    if ($(this).val() === 0) {
      const $minus = $(this).siblings('.js-minus');
      $minus.addClass('disabled');
    }
  });

  function countSelectItems(element) {
    const $inputElement = element.siblings('.js-count__num');
    let inputValue = Number($inputElement.val());

    if (element.hasClass('js-plus')) {
      $inputElement.val(inputValue += 1);
    }
    if (element.hasClass('js-minus')) {
      if (inputValue > 0) {
        $inputElement.val(inputValue -= 1);
      }
    }
  }

  function changeSelectButtonClass(element) {
    const $inputElement = element.siblings('.js-count__num');
    const inputValue = $inputElement.val();
    const minusBtn = $inputElement.siblings('.js-minus');

    if (inputValue > 0) {
      if (minusBtn.hasClass('disabled')) {
        minusBtn.removeClass('disabled');
      }
    } else if (!minusBtn.hasClass('disabled')) {
      minusBtn.addClass('disabled');
    }
  }

  $('.js-plus, .js-minus').on('click', function () {
    countSelectItems($(this));
    changeSelectButtonClass($(this));
    showHideResetButton($(this).closest('form'));
    const $selectForm = $(this).closest('form');

    if ($selectForm.hasClass('placement')) {
      const str = createPlacementText($selectForm);
      $selectForm.find('.js-input').val(str);
    }
    if ($selectForm.hasClass('guests')) {
      const str = createGuestsText($selectForm);
      $selectForm.find('.js-input').val(str);
    }
  });
});
