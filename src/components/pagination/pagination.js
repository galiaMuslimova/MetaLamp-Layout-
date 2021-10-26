$(window).on("load", function () {
  let dots = $(".pagination").find(".pag-dots").remove();
  let leftArrow = $(".pagination").find(".pag-left").remove();
  let rightArrow = $(".pagination").find(".pag-right").remove();
  let startDots = dots.clone();
  let endDots = dots.clone();

  $(".pag-num").each(function () {
    if($(this).hasClass("pag-checked")) {
      showHideDotsArrow($(this));
    }
  })

  function showHideDotsArrow (el) { 
    console.log(el.val());
    if (el.val() >= 13) {
      $(".pag-num[value=1]").after(startDots);
      $(".pag-num[value=1]").before(leftArrow);
      endDots = endDots.remove();
      rightArrow = rightArrow.remove(); 
    } else if (el.val() <= 3) {
      $(".pag-num[value=15]").before(endDots);
      $(".pag-num[value=15]").after(rightArrow);
      startDots = startDots.remove();
      leftArrow = leftArrow.remove();
    } else {
      $(".pag-num[value=15]").before(endDots);
      $(".pag-num[value=15]").after(rightArrow);
      $(".pag-num[value=1]").after(startDots);
      $(".pag-num[value=1]").before(leftArrow);
    }
  }

  $(".pag-right").on("click", function () {
    pagRight($(this));
  })

  $(".pag-left").on("click", function () {
    pagLeft($(this));
  })

  function pagRight(el) {
    let checked = $(el).siblings(".pag-checked");
    let newChecked;
    if (!checked.next().hasClass("pag-arrow")) {
      if (checked.prev().val() != 1) {
        checked.prev().removeClass("pag-shown");
      }      
      checked.next().addClass("pag-checked");
      checked.removeClass("pag-checked");
      newChecked = checked.next();
      newChecked.next().addClass("pag-shown");
    }
    showHideDotsArrow(newChecked);
  }

  function pagLeft(el) {
    let checked = $(el).siblings(".pag-checked");
    let newChecked;
    if (!checked.prev().hasClass("pag-arrow")) {
      if (checked.next().val() != 15) {
        checked.next().removeClass("pag-shown");
      }
      checked.prev().addClass("pag-checked");
      checked.removeClass("pag-checked");
      newChecked = checked.prev();
      newChecked.prev().addClass("pag-shown");
    }
    showHideDotsArrow(newChecked);
  }
})




