import RegisterCard from '@c/register-card/RegisterCard';

class Register {
  constructor($root) {
    this.$root = $root;
    this.init();
  }

  init() {
    const $element = this.$root.find('.js-register');
    if ($element[0]) {
      const registerCard = new RegisterCard($element);
    }
  }
}

export default Register;
