import FormPairDate from '../form-pair-date/FormPairDate.js';
import FormGuests from '../form-guests/FormGuests.js';
import Slider from '../slider/Slider.js';
import ExpandableList from '../expandable-list/ExpandableList.js';
import FormPlacement from '../form-placement/FormPlacement.js';

class Filter {
  constructor($root) {
    this.$root = $root;
    this.$element = $root.find('.js-filter');
    this.$date = this.$element.find('.js-filter__date');
    this.dateForm = new FormPairDate(this.$date);
    this.$guests = this.$element.find('.js-filter__guests');
    this.guestsForm = new FormGuests(this.$guests);
    this.slider = new Slider(this.$element);
    this.$placement = this.$element.find('.js-filter__placement');
    this.placementForm = new FormPlacement(this.$placement);
    this.$expandableList = this.$element.find('.js-filter__expandable-list');
    this.expandableList = new ExpandableList(this.$expandableList);
    this.initCalendar();
  }

  initCalendar() {
    const filterDate = ['2019-08-19', '2019-08-23'];
    this.dateForm.setDate(filterDate);
  }
}

export default Filter;
