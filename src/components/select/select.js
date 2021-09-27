$(window).on('load', function () {
  $('.submit').click(function () {
    let input = $(this).closest('.form').find('.input');
    let count = localStorage.getItem('guestsCount');

    function declOfNum(number, titles) {
      cases = [2, 0, 1, 1, 1, 2];
      return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }
    let str = count + ' ' + declOfNum(count, ['гость', 'гостя', 'гостей']);

    input.val(str);
    $(this).closest('.form').find('.drop').removeClass('active');
  });
});