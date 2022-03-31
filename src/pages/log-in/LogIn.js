import LogInCard from '@c/log-in-card/LogInCard';

class LogIn {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-log-in');
    this.logInCard = undefined;
    this.init();
  }

  init() {
    if (this.$element[0]) {
      this.logInCard = new LogInCard(this.$element);
    }
  }
}

export default LogIn;
