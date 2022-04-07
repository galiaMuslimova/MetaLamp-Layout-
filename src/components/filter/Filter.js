import FormPairDate from '../form-pair-date/FormPairDate.js';
import FormGuests from '../form-guests/FormGuests.js';
import Slider from '../slider/Slider.js';
import ExpandableList from '../expandable-list/ExpandableList.js';
import FormPlacement from '../form-placement/FormPlacement.js';

class Filter {
  constructor($root) {
    this.$root = $root;
    this.$element = $root.find('.js-filter');
    this.dateForm = new FormPairDate(this.$element.find('.js-filter__date'));
    this.guestsForm = new FormGuests(this.$element.find('.js-filter__guests'));
    this.slider = new Slider(this.$element);
    this.placementForm = new FormPlacement(this.$element.find('.js-filter__placement'));
    this.expandableList = new ExpandableList(this.$element.find('.js-filter__expandable-list'));
    this.initCalendar();
  }

  initCalendar() {
    const filterDate = ['2019-08-19', '2019-08-23'];
    this.dateForm.setDate(filterDate);
  }
}

export default Filter;
