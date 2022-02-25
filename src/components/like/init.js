import Like from './Like.js';

$('.js-like').each(function () {
  const like = new Like($(this));
});
