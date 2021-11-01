$(function () {
  $(".submit").on("click", function () {
    let selectForm = $(this).closest("form");
    selectForm.find(".drop").removeClass("active");
  });

 /* $(document).on("click", function(e){
    if($(e.target).closest("form").find(".drop").length == 1){
      console.log($(e.target).closest("form"))
      return
    }
    $(".drop").each(function(){
      $(this).removeClass("active");
    })
  })*/
});