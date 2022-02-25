import Selector from './Selector.js';

$('.js-selector').each(function () {
  const selector = new Selector($(this));
  selector.init();
});
