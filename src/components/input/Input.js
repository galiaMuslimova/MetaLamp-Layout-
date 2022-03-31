class Input {
  constructor($root, drop, openDrop, changeDate) {
    this.$root = $root;
    this.drop = drop;
    this.openDrop = openDrop;
    this.$element = this.$root.find('.js-input');
    this.$inputField = this.$element.find('.js-input__field');
    this.$inputButton = this.$element.find('.js-input__button');
    this.value = this.$inputField.val();
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$inputButton.on('click', this.handleDropOpen.bind(this));
    if (this.$element.hasClass('js-input_for-simple-date')) {
      this.$inputField.on('click', this.handleDropOpen.bind(this));
      this.$inputField.on('keyup', this.handleInputKeyup.bind(this));
    }
  }

  handleDropOpen() {
    this.openDrop();
    this.$element.toggleClass('input_active');
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
      this.changeDate(new Date(this.value));
    }
    console.log(this.value)

    this.$inputField.val(this.value);
  }
}

export default Input;
