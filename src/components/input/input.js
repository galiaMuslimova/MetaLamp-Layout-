$(window).on('load',function(){
  $('.input__btn',).click(function () {
    $(this).closest('.row').find('.drop').toggleClass('active')      
  });
});