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
    this.init();
  }

  init() {
    if (this.$element[0]) {
      const $firstGuestsElement = this.$element.find('.js-forms__guests_is-first');
      this.firstGuests = new FormGuests($firstGuestsElement);
      const $firstDateElement = this.$element.find('.js-forms__date_is-first');
      this.firstDate = new FormSimpleDate($firstDateElement);
      const $secondDateElement = this.$element.find('.js-forms__date_is-second');
      this.secondDate = new FormDoubleDate($secondDateElement);
      const $thirdDateElement = this.$element.find('.js-forms__date_is-third');
      this.thirdDate = new FormPairDate($thirdDateElement);
      this.thirdDate.setDate(['2019-08-19', '2019-08-23']);
      const $firstLikeElement = this.$element.find('.js-forms_like-item_is-first');
      this.firstLike = new Like($firstLikeElement);
      const $secondLikeElement = this.$element.find('.js-forms_like-item_is-second');
      this.secondLike = new Like($secondLikeElement);
      const $firstRateElement = this.$element.find('.js-forms_rate-item_is-first');
      this.firstRate = new Rate($firstRateElement);
      const $secondRateElement = this.$element.find('.js-forms_rate-item_is-second');
      this.secondRate = new Rate($secondRateElement);
      this.slider = new Slider(this.$element);
      this.pagination = new Pagination(this.$element);
      this.pagination.disablePreviousButton();
      const $firstPlaceElement = this.$element.find('.js-forms__placement_is-first');
      this.firstPlace = new FormPlacement($firstPlaceElement);
      const $secondPlaceElement = this.$element.find('.js-forms__placement_is-second');
      const secondPlace = new FormPlacement($secondPlaceElement);
      secondPlace.openSelector();
      const $secondGuestsElement = this.$element.find('.js-forms__guests_is-second');
      this.secondGuests = new FormGuests($secondGuestsElement);
      this.secondGuests.openSelector();
      const $thirdGuestsElement = this.$element.find('.js-forms__guests_is-third');
      this.thirdGuests = new FormGuests($thirdGuestsElement);
      this.thirdGuests.openSelector();
      const $firstExpandableElement = this.$element.find('.js-forms__expandable_is-first');
      this.firstExpandable = new ExpandableList($firstExpandableElement);
      const $secondExpandableElement = this.$element.find('.js-forms__expandable_expanded');
      this.secondExpandable = new ExpandableList($secondExpandableElement);
      this.secondExpandable.handleExpandableOpen();
      const $reviewElement = this.$element.find('.js-forms__review');
      this.review = new Review($reviewElement);
    }
  }
}

export default Forms;
