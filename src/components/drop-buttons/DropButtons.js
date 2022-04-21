import Observer from '../../observer/Observer';

class DropButtons {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-drop-buttons');
    this.observer = new Observer();
    this.$resetButton = this.$element.find('[data-button-type="reset"]');
    this.$submitButton = this.$element.find('[data-button-type="submit"]');
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$resetButton.on('click', this.handleResetButtonClick.bind(this));
    this.$submitButton.on('click', this.handleSubmitButtonClick.bind(this));
  }

  handleResetButtonClick() {
    this.observer.notify('clickReset');
  }

  handleSubmitButtonClick() {
    this.observer.notify('clickSubmit');
  }

  removeActiveClass() {
    this.$resetButton.removeClass('drop-buttons__item_active');
  }

  addActiveClass() {
    this.$resetButton.addClass('drop-buttons__item_active');
  }

  hasActiveClass() {
    return this.$resetButton.hasClass('drop-buttons__item_active');
  }
}

export default DropButtons;
