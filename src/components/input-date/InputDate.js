class InputDate {
  constructor($root, openDrop, changeDate) {
    this.$root = $root;
    this.openDrop = openDrop;
    this.changeDate = changeDate;
    this.$element = this.$root.find('.js-input-date');
    this.value = this.$element.val();
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$element.on('click', this.handleDropOpen.bind(this));
    this.$element.on('keyup', this.handleInputKeyup.bind(this));
  }

  handleDropOpen() {
    this.openDrop();
  }

  toggleActiveClass() {
    this.$element.toggleClass('input-date_active');
  }

  removeActiveClass() {
    this.$element.removeClass('input-date_active');
  }

  handleInputKeyup() {
    const oneDigitDay = '^[0-3]$';
    const TwoDigitDay = '^(0[1-9]|[12]\\d|3[01])$';
    const DayAndDot = '^(0[1-9]|[12]\\d|3[01])\\.$';
    const DayDotOneDigitMonth = '^(0[1-9]|[12]\\d|3[01])\\.[0|1]$';
    const DayDotMonth = '^(0[1-9]|[12]\\d|3[01])\\.(0[1-9]|1[012])$';
    const DayDotMonthDot = '^(0[1-9]|[12]\\d|3[01])\\.(0[1-9]|1[012])\\.$';
    const DayMonthOneDigitYear = '^(0[1-9]|[12]\\d|3[01])\\.(0[1-9]|1[012])\\.(1|2)$';
    const DayMonthTwoDigitYear = '^(0[1-9]|[12]\\d|3[01])\\.(0[1-9]|1[012])\\.(19|20)$';
    const allDate = '^(0[1-9]|[12]\\d|3[01])\\.(0[1-9]|1[012])\\.(19|20)\\d{1,2}$';
    const regExpStr = `${oneDigitDay}|${TwoDigitDay}|${DayAndDot}|${DayDotOneDigitMonth}|${DayDotMonth}|${DayDotMonthDot}|${DayMonthOneDigitYear}|${DayMonthTwoDigitYear}|${allDate}`;
    const decimalsRegExp = new RegExp(regExpStr);

    const inputValue = this.$inputField.val();
    const isCorrectExp = decimalsRegExp.test(inputValue);

    if (isCorrectExp || inputValue.length === 0) {
      this.value = inputValue;
    }

    if (this.value.length === 2 || this.value.length === 5) {
      this.value = `${this.value}.`;
    }

    if (this.value.length === 10) {
      this.changeDate(this.value);
    }

    this.$element.val(this.value);
  }
}

export default InputDate;
