$(window).on("load", function () { 
  $(".select").each(function () {
    let selectForm = $(this).closest("form");
    if (selectForm.hasClass("guests")) {
      let str = createGuestsText(selectForm);
      selectForm.find(".input").val(str);
      showHideResetButton(selectForm);
    }
    if (selectForm.hasClass("placement")) {
      let str = createPlacementText(selectForm);
      selectForm.find(".input").val(str);
    }
  });

  $(".select__reset").click(function () {
    let selectForm = $(this).closest("form");
    selectForm.find(".count__num").each(function () {
      $(this).val(0);
    });    
    selectForm.find(".minus").each(function () {
      $(this).addClass("disabled");
    });
    showHideResetButton(selectForm);
  });       
});

function declOfNum(number, titles) {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

function takeItemsCount(selectForm) {
  let items = selectForm.find(".count__num");
  let values = items.map(function (x) {
    return $(items[x]).val()
  });
  return ([Number(values[0]), Number(values[1]), Number(values[2])]);
}

export function showHideResetButton(selectForm) {
  let result = takeItemsCount(selectForm).reduce(function (sum, elem) {
    return sum + elem;
  }, 0);
  if (result > 0) {
    selectForm.find(".reset").addClass("active");
  }
  else {
    selectForm.find(".reset").removeClass("active");
  }
}

export function createGuestsText(selectForm) {
  let numOfGuests = takeItemsCount(selectForm);
  let adultsNum = numOfGuests[0] + numOfGuests[1];
  let adults = adultsNum + ' ' + declOfNum(adultsNum, ['гость', 'гостя', 'гостей']);
  let babies = numOfGuests[2] + ' ' + declOfNum(numOfGuests[2], ['младенец', 'младенца', 'младенцев']);
  let str;
  if (numOfGuests[0] + numOfGuests[1] == 0) {
    str = "Сколько гостей";
  } else
    if (numOfGuests[2] == 0) {
      str = adults;
    } else {
      str = adults + ", " + babies;
    }
  return str;
}

export function createPlacementText(selectForm) {
  let numOfplacement = takeItemsCount(selectForm);
  let bedrooms = numOfplacement[0] + ' ' + declOfNum(numOfplacement[0], ['спальня', 'спальни', 'спален']);
  let beds = numOfplacement[1] + ' ' + declOfNum(numOfplacement[1], ['кровать', 'кровати', 'кроватей']);
  let str;
  if (numOfplacement[0] == 0) {
    str = "Сколько спален";
  } else {
    str = bedrooms + ", " + beds + "...";
  }
  return str;
}

