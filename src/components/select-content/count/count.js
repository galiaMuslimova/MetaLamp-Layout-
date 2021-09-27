$(window).on('load', function () {
  $('.plus, .minus').click(function () {
    let num = $(this).siblings('.count__num');
    let i = num.val();
    if($(this).hasClass('plus')) {
      num.val(++i);
    };
    if ($(this).hasClass('minus')) {
      if (i > 0) {
        num.val(--i);
      }        
    }     
  });
});
