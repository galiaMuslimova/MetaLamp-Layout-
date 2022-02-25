class ExpandableList {
  constructor(element) {
    this.element = element;
    this.$expandIcon = $(this.element).find('.js-expandable-list__icon');
    this.$checkboxList = $(this.element).find('.js-expandable-list__check-list');
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$expandIcon.on('click', this.handleExpandableOpen.bind(this));
    $(document).on('click', ExpandableList.handleCheckboxListClassActiveRemove);
  }

  handleExpandableOpen() {
    this.$expandIcon.toggleClass('expandable-list__icon_expanded');
    this.$checkboxList.toggleClass('expandable-list__check-list_active');
  }

  static handleCheckboxListClassActiveRemove(event) {
    const $expandableList = $(this).closest('.js-expandable-list');
    const $checkboxList = $expandableList.find('.js-expandable-list__check-list');
    if ($expandableList.find(event.target).length === 0) {
      $checkboxList.removeClass('expandable-list__check-list_active');
    }
  }
}

export default ExpandableList;
