$(document).ready(function () {
  $(".count__num").each(function () {
    if ($(this).val() == 0) {
      $(this).siblings(".minus").addClass("disabled")
    }
  })
  $(".plus, .minus").click(function () {
    countSelectItems($(this));
    changeSelectButtonClass($(this));
  })
})

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


