$(document).ready(function() {
  $(".like").on("change", function() {
    let isCheck = $(this).find(".like__input").is(":checked");
    let likeInput = $(this).find(".like__count");
    let likeCount = Number(likeInput.val());
    if(isCheck) {      
      likeInput.val(++likeCount);
    } else {
      likeInput.val(--likeCount);
    }
  })
})