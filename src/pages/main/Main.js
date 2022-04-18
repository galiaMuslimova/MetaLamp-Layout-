import EntryCard from '@c/entry-card/EntryCard';

class Main {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-main');
    this.init();
  }

  init() {
    if (this.$element[0]) {
      this.entryCard = new EntryCard(this.$element);
    }
  }
}

export default Main;
