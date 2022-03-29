import LogInCard from '@c/log-in-card/LogInCard';

class LogIn {
  constructor(element) {
    this.element = element;
    this.logInCard = new LogInCard(this.element);
  }
}

export default LogIn;
