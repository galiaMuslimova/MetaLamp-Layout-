$(document).ready(function() {
  $(".input__open").click(function() {
    $(this).closest("form").find(".drop").toggleClass("active");
  })
})