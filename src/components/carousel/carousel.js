$(document).ready(function() {
  $(".carousel__mover").on("click", function() {     
    let images = $(this).siblings(".carousel__image");
    let indicators = $(this).siblings(".carousel__indicators");

    function slideToRight (itemList) {
      let activeItem = itemList.find(".shown");
      if (activeItem.next()[0] != undefined) {
        activeItem.next().addClass("shown");
      } else {
        let firstItem = itemList.children().first();
        $(firstItem).addClass("shown");
      }
      activeItem.removeClass("shown")
    }

    function slideToLeft(itemList) {
      let activeItem = itemList.find(".shown");
      if (activeItem.prev()[0] != undefined) {
        activeItem.prev().addClass("shown");
      } else {
        let lastItem = itemList.children().last();
        $(lastItem).addClass("shown");
      }
      activeItem.removeClass("shown");
    }

    if($(this).hasClass("carousel__mover_right")) {      
      slideToRight(images);
      slideToRight(indicators)
    }

    if ($(this).hasClass("carousel__mover_left")) {
      slideToLeft(images);
      slideToLeft(indicators);
    }
  })
})
