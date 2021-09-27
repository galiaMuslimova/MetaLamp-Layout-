$(window).on('load', function () {

  function selectCount(el) {    
    //sessionStorage.setItem('roomsCount', '0'); 

    let form = el.closest('.form');
    let key = form[0].name;
    let count = 0;
    if ((sessionStorage.getItem(key)) && (!isNaN(sessionStorage.getItem(key)))){
        count = sessionStorage.getItem(key);
    }
    else {
      sessionStorage.setItem(key, 0);
      console.log('dd');
    };

    if (el.hasClass('minus')) {
      if (count > 0) {
        --count;
      }
    };

    if (el.hasClass('plus')) {
      ++count;      
    }; 
    
    sessionStorage.setItem(key, count)
  }

  $('.count__btn').click(function () {      
    selectCount($(this));   
  })   
});