import { count } from './count/count.js'

$(window).on('load', function () {
  //задает значения 0 для элементов select
  $('.count__num').each(function () {
    let id = $(this).closest('.count')[0].id;
    sessionStorage.setItem(id, 0);    
  });

  function makeInputText (el) {
    let form = el.closest('.form');
    if(form.hasClass('guests')) {
      let adults = Number(sessionStorage.getItem('взрослые')) + Number(sessionStorage.getItem('дети'));
      let babies = sessionStorage.getItem('младенцы');
      return (adults + 'взрослые, ' + babies + 'младенцы');
    }
  }

  $('.plus, .minus').click(function () {
    count($(this)); 
    let text = makeInputText($(this));
    if($(this).closest('.form').hasClass('guests')) {
      $(".guests>.input").val(text);
    }     
    
  })
});

/*$(window).on('load', function () {

  $('.submit').on('click', function () {
    let input = $(this).closest('.form').find('.input');
    let count = sessionStorage.getItem('guestsCount');

    function declOfNum(number, titles) {
      cases = [2, 0, 1, 1, 1, 2];
      return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }
    let str = count + ' ' + declOfNum(count, ['гость', 'гостя', 'гостей']);

    input.val(str);
    $(this).closest('.form').find('.drop').removeClass('active'); 
  });

  $('.reset').click(function () {
    $(this).closest('.form').trigger('reset');
    sessionStorage.clear();   
  });
});*/