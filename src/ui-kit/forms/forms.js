import { createSlider } from "@c/slider/slider.js";
import { createPagination } from "@c/pagination/pagination.js";

$(function() {
  $(".expanded").find(".select").removeClass("drop");
  $(".expanded").find(".checkbox-list").removeClass("drop");
  let sliderForms = createSlider($(".slider_forms"));
  createPagination()
})