class Checkbox {
  constructor(element) {
    this.elemenet = element;
    this.$content = this.elemenet.find('.checkbox__content');
    this.$checkboxInput = this.elemenet.find('.checkbox__input');
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$content.on('click', this.handleCheckboxContentClick.bind(this));
  }

  handleCheckboxContentClick() {
    const isChecked = this.$checkboxInput.prop('checked');
    this.$checkboxInput.prop('checked', !isChecked);
  }
}

export default Checkbox;
