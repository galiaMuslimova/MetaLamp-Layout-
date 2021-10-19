$(window).on("load", function () {  

  $(".submit").click(function() {
    let selectForm = $(this).closest("form");
    let str = makeInputText(selectForm);
    selectForm.find(".input").val(str);
  })

  $(".reset").click(function () {
    let selectForm = $(this).closest("form");
    selectForm.trigger("reset");
    selectForm.find(".minus").each(function() { 
      $(this).addClass("disabled");
    });
  });

  function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  function countGuests(selectForm) {
    let items = selectForm.find(".count__num");    
    let values = items.map(function(x){
      return $(items[x]).val()
    });  
    let adults = Number(values[0]) + Number(values[1]);
    let babies = Number(values[2]);      
    return ([adults, babies]);    
  }  

  function makeInputText(selectForm) {
    let numOfGuests = countGuests(selectForm);
    let adults = numOfGuests[0] + ' ' + declOfNum(numOfGuests[0], ['гость', 'гостя', 'гостей']);
    let babies = numOfGuests[1] + ' ' + declOfNum(numOfGuests[1], ['младенец', 'младенца', 'младенцев']);
    let str;
    if (numOfGuests[1] == 0) {
      str = adults;
    }
    else {
      str = adults + ", " + babies;
    }    
    return str;
  }  
});
