class Pagination {
  constructor($root, $items, limitPerPage = 12) {
    this.$root = $root;
    this.$element = this.$root.find('.js-pagination');
    this.$anchor = this.$element.find('.js-pagination__anchor');
    this.$items = $items;
    this.limitPerPage = limitPerPage;
    this.currentPage = 1;
    this.numberOfItems = undefined;
    this.totalPages = undefined;
    this.$prevButton = this.$element.find('.js-pagination__item_previous');
    this.$nextButton = this.$element.find('.js-pagination__item_next');
  }

  init() {
    this.numberOfItems = this.$items.length;
    this.totalPages = Math.ceil(this.numberOfItems / this.limitPerPage);
    this.showPage();
    this.bindEventListeners();
  }

  bindEventListeners() {
    const root = this;
    $(document).on('click', '.js-pagination__item_current', function () {
      root.handleNumberButtonClick($(this));
    });
    this.$nextButton.on('click', this.handleNextButtonClick.bind(this));
    this.$prevButton.on('click', this.handlePrevButtonClick.bind(this));
  }

  handleNumberButtonClick(element) {
    this.currentPage = Number(element.text());
    this.showPage();
  }

  handleNextButtonClick() {
    this.currentPage += 1;
    this.showPage();
  }

  handlePrevButtonClick() {
    this.currentPage -= 1;
    this.showPage();
  }

  static createRange(start, end) {
    const arrLength = end - start + 1;
    return Array.from({ length: arrLength }, (x, i) => i + start);
  }

  getPageList() {
    let start = [1];
    let middle = [undefined];
    let end = [this.totalPages];
    if (this.currentPage <= 3) {
      start = [1, 2, 3];
    } else if (this.currentPage >= this.totalPages - 1) {
      end = Pagination.createRange(this.totalPages - 2, this.totalPages);
    } else if (this.currentPage >= this.totalPages - 2) {
      end = Pagination.createRange(this.totalPages - 3, this.totalPages);
    } else {
      const intro = Pagination.createRange(this.currentPage - 1, this.currentPage + 1);
      middle = [undefined].concat(intro, undefined);
    }
    return start.concat(middle, end);
  }

  showPage() {
    const start = (this.currentPage - 1) * this.limitPerPage;
    const end = this.currentPage * this.limitPerPage;

    if (this.currentPage < 1 || this.currentPage > this.totalPages) {
      return false;
    }

    this.$items.hide().slice(start, end).show();
    this.$anchor.find('.pagination__item').slice(1, -1).remove();

    this.getPageList().forEach((item) => this.addPaginationItems(item));

    this.$prevButton.toggleClass('pagination__item_disable', this.currentPage === 1);
    this.$nextButton.toggleClass('pagination__item_disable', this.currentPage === this.totalPages);
    return true;
  }

  disablePreviousButton() {
    this.$prevButton.addClass('pagination__item_disable');
  }

  addPaginationItems(item) {
    $('<div>').addClass('pagination__item').addClass(item ? 'pagination__item_current js-pagination__item_current' : 'pagination__item_dots')
      .toggleClass('pagination__item_active', item === this.currentPage)
      .text(item || '...')
      .insertBefore(this.$nextButton);
  }
}

export default Pagination;
