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
    this.init();
  }

  init() {
    this.$element = this.$root.find('.js-forms');
    if (this.$element[0]) {
      this.initDates();
      this.initGuests();
      this.initPlacement();
      this.initLike();
      this.initRate();
      this.initExpandable();
      this.initReview();
      this.initSlider();
      this.initPagination();
    }
  }

  initDates() {
    const $firstDateElement = this.$element.find('.js-forms__date_is-first');
    const firstDate = new FormSimpleDate($firstDateElement);
    const $secondDateElement = this.$element.find('.js-forms__date_is-second');
    const secondDate = new FormDoubleDate($secondDateElement);
    const $thirdDateElement = this.$element.find('.js-forms__date_is-third');
    const thirdDate = new FormPairDate($thirdDateElement);
    thirdDate.setDate(['2019-08-19', '2019-08-23']);
  }

  initGuests() {
    const $firstGuestsElement = this.$element.find('.js-forms__guests_is-first');
    const firstGuests = new FormGuests($firstGuestsElement);
    const $secondGuestsElement = this.$element.find('.js-forms__guests_is-second');
    const secondGuests = new FormGuests($secondGuestsElement);
    secondGuests.openSelector();
    const $thirdGuestsElement = this.$element.find('.js-forms__guests_is-third');
    const thirdGuests = new FormGuests($thirdGuestsElement);
    thirdGuests.openSelector();
  }

  initPlacement() {
    const $firstPlaceElement = this.$element.find('.js-forms__placement_is-first');
    const firstPlace = new FormPlacement($firstPlaceElement);
    const $secondPlaceElement = this.$element.find('.js-forms__placement_is-second');
    const secondPlace = new FormPlacement($secondPlaceElement);
    secondPlace.openSelector();
  }

  initLike() {
    const $firstLikeElement = this.$element.find('.js-forms_like-item_is-first');
    const firstLike = new Like($firstLikeElement);
    const $secondLikeElement = this.$element.find('.js-forms_like-item_is-second');
    const secondLike = new Like($secondLikeElement);
  }

  initRate() {
    const $firstRateElement = this.$element.find('.js-forms_rate-item_is-first');
    const firstRate = new Rate($firstRateElement);
    const $secondRateElement = this.$element.find('.js-forms_rate-item_is-second');
    const secondRate = new Rate($secondRateElement);
  }

  initExpandable() {
    const $firstExpandableElement = this.$element.find('.js-forms__expandable_is-first');
    const firstExpandable = new ExpandableList($firstExpandableElement);
    const $secondExpandableElement = this.$element.find('.js-forms__expandable_expanded');
    const secondExpandable = new ExpandableList($secondExpandableElement);
    secondExpandable.handleExpandableOpen();
  }

  initReview() {
    const $reviewElement = this.$element.find('.js-forms__review');
    const review = new Review($reviewElement);
  }

  initPagination() {
    const pagination = new Pagination(this.$element);
    pagination.disablePreviousButton();
  }

  initSlider() {
    const slider = new Slider(this.$element);
  }
}

export default Forms;
