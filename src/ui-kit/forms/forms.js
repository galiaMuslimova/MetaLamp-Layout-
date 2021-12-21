import { createSlider } from "@c/slider/slider.js";

$(function() {
  //$(".expanded").find(".select").removeClass("drop");
  //$(".expanded").find(".checkbox-list").removeClass("drop");
  let sliderForms = createSlider($(".slider_forms"));
  $(".js-expanded").find(".drop").addClass("active");
})