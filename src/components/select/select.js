$(window).on('load', function () {

  $('.submit').click(function () {
    let form = $(this).closest('.form');
    let count = 0;

    form.find('.count__num').each( function () {
      count += Number($(this).val());      
    });

    let input = form.find('.input');
    if (count == 0) { input.val('Сколько гостей') } else
      if (count == 1) { input.val(count + ' гость')} else
        if ((count >= 2) && (count <= 4)) { input.val(count + ' гостя') } else
          if ((count > 4) && (count < 20)) { input.val(count + ' гостей') } else
            {input.val('Много гостей')};  
    form.find('.drop').removeClass('active');
  });
});