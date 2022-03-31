import Cards from '@/ui-kit/cards/Cards';
import Forms from '@/ui-kit/forms/Forms';
import Insertions from '@/ui-kit/insertions/Insertions';

class UiKitBase {
  constructor($element) {
    this.$element = $element;
    this.cards = new Cards(this.$element);
    this.formsElement = new Forms(this.$element);
    this.insertions = new Insertions(this.$element);
  }
}

export default UiKitBase;
