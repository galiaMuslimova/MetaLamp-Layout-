import { createPlacementText, createGuestsText, showHideResetButton } from '@c/select/select.js';

function countSelectItems(element) {
    const $inputElement = element.siblings('.js-count__num');
    let inputValue = Number($inputElement.val());

    if (element.hasClass('js-count__btn_with-plus')) {
      $inputElement.val(inputValue += 1);
    }
    if (element.hasClass('js-count__btn_with-minus')) {
      if (inputValue > 0) {
        $inputElement.val(inputValue -= 1);
      }
    }
  }

  function changeSelectButtonClass(element) {
    const $inputElement = element.siblings('.js-count__num');
    const inputValue = $inputElement.val();
    const minusBtn = $inputElement.siblings('.js-count__btn_with-minus');

    if (inputValue > 0) {
      if (minusBtn.hasClass('count__btn_disabled')) {
        minusBtn.removeClass('count__btn_disabled');
      }
    } else if (!minusBtn.hasClass('count__btn_disabled')) {
      minusBtn.addClass('count__btn_disabled');
    }
  }

$(() => {
  const $countNums = $('.js-count__num');
  $countNums.each(function () {
    if ($(this).val() === 0) {
      const $minus = $(this).siblings('.js-count__btn_with-minus');
      $minus.addClass('disabled');
    }
  });

  $('.js-count__btn_with-plus, .js-count__btn_with-minus').on('click', function () {
    const $selectDrop = $(this).closest('.drop');
    const $selectForm = $(this).closest('form'); 
    countSelectItems($(this));
    changeSelectButtonClass($(this));
    showHideResetButton($selectForm);    

    if ($selectDrop.hasClass('drop_for-placement')) {
      const str = createPlacementText($selectForm);
      $selectForm.find('.js-input__field').val(str);
    }
    if ($selectDrop.hasClass('drop_for-guests')) {
      const str = createGuestsText($selectForm);
      $selectForm.find('.js-input__field').val(str);
    }
  });
});
