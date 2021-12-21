$(function(){
  $(".catalog__button").on("click", function(){
    $(this).siblings(".catalog__filter").toggleClass('active')
  })
  $(".pagination_catalog").pagination();
})