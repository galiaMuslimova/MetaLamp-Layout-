$(window).on('load', function () {
  localStorage.setItem('guestsCount', 0);
  localStorage.setItem('roomsCount', 0);

  function selectCount(el) {
    let form = el.closest('.form');
    let key = form[0].accessKey;
    let count = localStorage.getItem(key);

    if (el.hasClass('minus')) {
      if (count > 0) {
        --count;
        localStorage.setItem(key, count);
      }
    };

    if (el.hasClass('plus')) {
      ++count;
      localStorage.setItem(key, count);
    };    
  }

  $('.count__btn').click(function () {      
    selectCount($(this));    
  })   
});