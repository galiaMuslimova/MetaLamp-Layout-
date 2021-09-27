$(document).ready(function () {
    $(".filter > .form[name='guestsCount']").find('.input').val(sessionStorage.getItem('guestsCount'));
});