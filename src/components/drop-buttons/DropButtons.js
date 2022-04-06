class DropButtons {
  constructor($root, resetCalendar, submitCalendar) {
    this.$root = $root;
    this.$element = this.$root.find('.js-drop-buttons');
    this.resetCalendar = resetCalendar;
    this.submitCalendar = submitCalendar;
    this.$resetButton = this.$element.find('.js-drop-buttons__item_for-reset');
    this.$submitButton = this.$element.find('.js-drop-buttons__item_for-submit');
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$resetButton.on('click', this.resetCalendar());
    this.$submitButton.on('click', this.submitCalendar());
  }

  removeActiveClass() {
    this.$resetButton.removeClass('drop-buttons__item_active');
  }

  hasActiveClass() {
    return this.$resetButton.hasClass('drop-buttons__item_active');
  }
}

export default DropButtons;
