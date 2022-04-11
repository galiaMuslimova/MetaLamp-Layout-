import Observer from '../../observer/Observer';

class IconOpen {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-icon-open');
    console.log('icon')
    this.observer = new Observer();
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$element.on('click', this.handleClickIcon.bind(this));
  }

  handleClickIcon() {
    this.observer.notify('clickIcon');
  }
}

export default IconOpen;
