$(window).on("load", function () {
  $(".submit").on("click", function () {
    let selectForm = $(this).closest("form");
    selectForm.find(".drop").removeClass("active");
  });
});