import FormGuests from '../../components/form-guests/FormGuests';
import FormPlacement from '../../components/form-placement/FormPlacement';
import FormDoubleDate from '../../components/form-double-date/FormDoubleDate';
import FormSimpleDate from '../../components/form-simple-date/FormSimpleDate';
import FormPairDate from '../../components/form-pair-date/FormPairDate';
import Like from '../../components/like/Like';
import Rate from '../../components/rate/Rate';
import Slider from '../../components/slider/Slider.js';
import Pagination from '../../components/pagination/Pagination';
import ExpandableList from '../../components/expandable-list/ExpandableList';
import Review from '../../components/review/Review';

class Forms {
  constructor($root) {
    this.$root = $root;
    this.$element = $root.find('.js-forms');
    this.firstGuests = undefined;
    this.firstDate = undefined;
    this.secondDate = undefined;
    this.thirdDate = undefined;
    this.firstLike = undefined;
    this.secondLike = undefined;
    this.firstRate = undefined;
    this.secondRate = undefined;
    this.pagination = undefined;
    this.slider = undefined;
    this.firstPlace = undefined;
    this.secondPlace = undefined;
    this.secondGuests = undefined;
    this.firstExpandable = undefined;
    this.secondExpandable = undefined;
    this.review = undefined;
    this.init();
  }

  init() {
    if (this.$element[0]) {
      this.firstGuests = new FormGuests(this.$element.find('.js-forms__guests_is-first'));
      this.firstDate = new FormSimpleDate(this.$element.find('.js-forms__date_is-first'));
      this.secondDate = new FormDoubleDate(this.$element.find('.js-forms__date_is-second'), 'forms-double');
      this.thirdDate = new FormPairDate(this.$element.find('.js-forms__date_is-third'));
      this.thirdDate.setDate(['2019-08-19', '2019-08-23']);
      this.firstLike = new Like(this.$element.find('.js-forms_like-item_is-first'));
      this.secondLike = new Like(this.$element.find('.js-forms_like-item_is-second'));
      this.firstRate = new Rate(this.$element.find('.js-forms_rate-item_is-first'));
      this.secondRate = new Rate(this.$element.find('.js-forms_rate-item_is-second'));
      this.slider = new Slider(this.$element);
      this.pagination = new Pagination(this.$element);
      this.pagination.createPaginationSample();
      this.firstPlace = new FormPlacement(this.$element.find('.js-forms__placement_is-first'));
      this.secondPlace = new FormPlacement(this.$element.find('.js-forms__placement_is-second'));
      this.secondPlace.openSelector();
      this.secondGuests = new FormGuests(this.$element.find('.js-forms__guests_is-second'));
      this.secondGuests.openSelector();
      this.thirdGuests = new FormGuests(this.$element.find('.js-forms__guests_is-third'));
      this.thirdGuests.openSelector();
      this.firstExpandable = new ExpandableList(this.$element.find('.js-forms__expandable_is-first'));
      this.secondExpandable = new ExpandableList(this.$element.find('.js-forms__expandable_expanded'));
      this.secondExpandable.handleExpandableOpen();
      this.review = new Review(this.$element.find('.js-forms__review'));
    }
  }
}

export default Forms;
