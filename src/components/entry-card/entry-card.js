$(document).ready(function () {
  $(".entry-card").find(".btn_link").on("click", function () {
    $(location).attr('href', "./catalog.html");
  });
});