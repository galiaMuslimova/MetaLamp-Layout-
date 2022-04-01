import Drop from '../drop/Drop';

class ExpandableList {
  constructor($root) {
    this.$root = $root;
    this.$element = $root.find('.js-expandable-list');
    this.drop = new Drop(this.$element);
    this.$expandIcon = this.$element.find('.js-expandable-list__icon');
    this.$checkboxList = this.$element.find('.js-expandable-list__check-list');
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$expandIcon.on('click', this.handleExpandableOpen.bind(this));
  }

  handleExpandableOpen() {
    this.$expandIcon.toggleClass('expandable-list__icon_expanded');
    this.drop.toggleActiveClass();
  }
}

export default ExpandableList;
