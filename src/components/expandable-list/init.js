import ExpandableList from './ExpandableList.js';

$('.js-expandable-list').each(function () {
  const expandableList = new ExpandableList($(this));
});
