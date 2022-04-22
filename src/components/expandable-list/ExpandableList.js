class ExpandableList {
  constructor($root) {
    this.$root = $root;
    this.init();
    this.bindEventListeners();
  }

  init() {
    this.$element = this.$root.find('.js-expandable-list');
    this.$checkboxList = this.$element.find('.js-expandable-list__check-list');
    this.$expandIcon = this.$element.find('.js-expandable-list__icon');
  }

  bindEventListeners() {
    this.$expandIcon.on('click', this.handleExpandableOpen.bind(this));
    $(document).on('click', this.handleDropClassActiveRemove.bind(this));
  }

  handleExpandableOpen() {
    this.$expandIcon.toggleClass('expandable-list__icon_active');
    this.$checkboxList.toggleClass('expandable-list__check-list_active');
  }

  handleDropClassActiveRemove(event) {
    const isOpen = this.$checkboxList.hasClass('expandable-list__check-list_active');
    if (isOpen && this.$root.find(event.target).length === 0) {
      this.$expandIcon.removeClass('expandable-list__icon_active');
      this.$checkboxList.removeClass('expandable-list__check-list_active');
    }
  }
}

export default ExpandableList;
