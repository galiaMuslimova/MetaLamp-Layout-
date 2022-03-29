import EntryCard from '@c/entry-card/EntryCard';

class Main {
  constructor(element) {
    this.element = element;
    this.entryCard = new EntryCard(this.element);
  }
}

export default Main;
