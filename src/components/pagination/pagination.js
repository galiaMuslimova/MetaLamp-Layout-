function getPageList(totalPages, page){ 
  function range(start, end){    
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  } 
  if (page <= 2) {
    return range(1, 3).concat(0, totalPages);
  }
  if (page <= 3){
    return range(1, 4).concat(0, range(totalPages, totalPages));
  }
  if (page >= totalPages - 1) {
    return range(1, 1).concat(0, range(totalPages - 2, totalPages));
  }
  if(page >= totalPages - 2){
    return range(1, 1).concat(0, range(totalPages- 3, totalPages));
  }
  return range(1, 1).concat(0, range(page - 1, page + 1), 0, totalPages);
}

function showPage(pageNum) {
  let numberOfItems = $(".catalog-list .catalog-item").length;
  let limitPerPage = 12;
  let totalPages = Math.ceil(numberOfItems / limitPerPage);

  if (pageNum < 1 || pageNum > totalPages) return false;

  let currentPage = pageNum;

  $(".catalog-list .catalog-item").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

  $(".pagination li").slice(1, -1).remove();

  getPageList(totalPages, currentPage).forEach(item => {
    $("<li>").addClass("pagination__item").addClass(item ? "pagination__item_current" : "pagination__item_dots")
      .toggleClass("active", item === currentPage).text(item || "...").insertBefore(".pagination__item_next");
  });

  $(".pagination__item_previous").toggleClass("disable", currentPage === 1);
  $(".pagination__item_next").toggleClass("disable", currentPage === totalPages);
  return true;
}

export function createPagination(el){
  let currentPage = 1;

  $(el).append(
    $("<li>").addClass("pagination__item").addClass("pagination__item_previous").append($("<span>").addClass("icon-arrow_back")),
    $("<li>").addClass("pagination__item").addClass("pagination__item_next").append($("<span>").addClass("icon-arrow"))
  );

  showPage(1);

  $(document).on("click", ".pagination__item_current", function () {
    currentPage = Number($(this).text());
    return showPage(Number($(this).text()));
  });

  $(".pagination__item_next").on("click", function () {
    return showPage(++currentPage);
  });

  $(".pagination__item_previous").on("click", function () {
    return showPage(--currentPage);
  });
}

$(function(){
  $.fn.pagination = function () {
    createPagination(this);
    return this;
  };
});

  