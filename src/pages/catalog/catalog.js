$(function(){
  $(".catalog__button").on("click", function(){
    $(this).siblings(".catalog__filter").toggleClass('active')
  })
})