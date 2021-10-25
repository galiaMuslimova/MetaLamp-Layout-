import { createPlacementText, createGuestsText, showHideResetButton } from "@c/select/select.js"

$(document).ready(function () {
  $(".count__num").each(function () {
    if ($(this).val() == 0) {
      $(this).siblings(".minus").addClass("disabled")
    }
  })

  $(".plus, .minus").click(function () {
    countSelectItems($(this));
    changeSelectButtonClass($(this));
    showHideResetButton($(this).closest("form"));
    let selectForm = $(this).closest("form");

    if (selectForm.hasClass("placement")) {        
      let str = createPlacementText(selectForm);
      selectForm.find(".input").val(str);
    }
    if (selectForm.hasClass("guests")) {
      let str = createGuestsText(selectForm);
      selectForm.find(".input").val(str);
    }    
  })
});

function countSelectItems (element) {
  let inputElement = element.siblings(".count__num");
  let inputValue = inputElement.val();

  if (element.hasClass('plus')) {
    inputElement.val(++inputValue);
  };
  if (element.hasClass('minus')) {
    if (inputValue > 0) {
      inputElement.val(--inputValue);
    }        
  }
}

function changeSelectButtonClass(element) {
  let inputElement = element.siblings(".count__num");
  let inputValue = inputElement.val();
  let minusBtn = inputElement.siblings(".minus");

  if (inputValue > 0) {
    if (minusBtn.hasClass("disabled")) {
      minusBtn.removeClass("disabled")
    }
  }
  else {
    if (!minusBtn.hasClass("disabled")) {
      minusBtn.addClass("disabled")
    }
  }
}



