const data = require('./catalog-list.json')

$(document).ready(function () {
  for (i in data) {
    row = "<div class='row'>" + data[i].num + '</div>';
    $('.catalog-list').append(row)
  }
})
