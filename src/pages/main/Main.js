import EntryCard from '@c/entry-card/EntryCard';

class Main {
  constructor($root) {
    this.$root = $root;
    this.init();
  }

  init() {
    this.$element = this.$root.find('.js-main');
    if (this.$element[0]) {
      this.entryCard = new EntryCard(this.$element);
    }
  }
}

export default Main;
