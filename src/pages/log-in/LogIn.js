import LogInCard from '@c/log-in-card/LogInCard';

class LogIn {
  constructor($root) {
    this.$root = $root;
    this.init();
  }

  init() {
    this.$element = this.$root.find('.js-log-in');
    if (this.$element[0]) {
      this.logInCard = new LogInCard(this.$element);
    }
  }
}

export default LogIn;
