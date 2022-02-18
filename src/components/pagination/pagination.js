export default class Pagination {
  constructor(element, items, limitPerPage = 12) {
    this.element = element;
    this.items = items;
    this.limitPerPage = limitPerPage;
    this.currentPage = 1;
    this.numberOfItems = this.items.length;
    this.totalPages = Math.ceil(this.numberOfItems / this.limitPerPage);
    this.$prevBtn = $('<div>');
    this.$nextBtn = $('<div>');
  }

  init() {
    this.addPaginationArrowButtons();
    this.showPage();
    this.bindEventListeners();
  }

  bindEventListeners() {
    const root = this;
    $(document).on('click', '.js-pagination__item_current', function () {
      root.handleNumberButtonClick($(this));
    });
    this.$nextBtn.on('click', this.handleNextButtonClick.bind(this));
    this.$prevBtn.on('click', this.handlePrevButtonClick.bind(this));
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
    let middle = [0];
    let end = [this.totalPages];
    if (this.currentPage <= 3) {
      start = [1, 2, 3];
    } else if (this.currentPage >= this.totalPages - 1) {
      end = this.constructor.createRange(this.totalPages - 2, this.totalPages);
    } else if (this.currentPage >= this.totalPages - 2) {
      end = this.constructor.createRange(this.totalPages - 3, this.totalPages);
    } else {
      const intro = this.constructor.createRange(this.currentPage - 1, this.currentPage + 1);
      middle = [0].concat(intro, 0);
    }
    return start.concat(middle, end);
  }

  showPage() {
    const start = (this.currentPage - 1) * this.limitPerPage;
    const end = this.currentPage * this.limitPerPage;
    
    if (this.currentPage < 1 || this.currentPage > this.totalPages) { 
      return false 
    };
    this.items.hide().slice(start, end).show();    
    this.element.find('.pagination__item').slice(1, -1).remove();

    this.getPageList().forEach((item) => this.addPaginationItems(item));

    this.$prevBtn.toggleClass('pagination__item_disable', this.currentPage === 1);
    this.$nextBtn.toggleClass('pagination__item_disable', this.currentPage === this.totalPages);
    return true;
  }

  addPaginationItems(item) {
    $('<div>').addClass('pagination__item').addClass(item ? 'pagination__item_current js-pagination__item_current' : 'pagination__item_dots')
      .toggleClass('pagination__item_active', item === this.currentPage)
      .text(item || '...')
      .insertBefore('.pagination__item_next');
  }

  addPaginationArrowButtons() {
    this.$prevBtn = this.$prevBtn.addClass('pagination__item').addClass('pagination__item_previous js-pagination__item_previous').append($('<span>').addClass('pagination__icon').append($('<span>').addClass('icon-arrow_back')));
    this.$nextBtn = this.$nextBtn.addClass('pagination__item').addClass('pagination__item_next js-pagination__item_next').append($('<span>').addClass('pagination__icon').append($('<span>').addClass('icon-arrow')));
    $(this.element).append(this.$prevBtn, this.$nextBtn);
  }
}
