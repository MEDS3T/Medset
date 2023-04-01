"use strict";

// JS global variables
let config = {
  colors: {
    primary: "#20539E ",
    secondary: "#6387bb",
    success: "#4FB6B2",
    info: "#FFD064",
    warning: "#EA5455",
    danger: "#ea5455",
    dark: "#4b4b4b",
    black: "#000",
    white: "#fff",
    cardColor: "#fff",
    bodyBg: "#f8f7fa",
    bodyColor: "#6f6b7d",
    headingColor: "#5d596c",
    textMuted: "#a5a3ae",
    borderColor: "#dbdade",
  },
  colors_label: {
    primary: "#20539E 29",
    secondary: "#6387bb29",
    success: "#4FB6B229",
    info: "#FFD06429",
    warning: "#EA545529",
    danger: "#ea545529",
    dark: "#4b4b4b29",
  },
  colors_dark: {
    cardColor: "#2f3349",
    bodyBg: "#25293c",
    bodyColor: "#b6bee3",
    headingColor: "#cfd3ec",
    textMuted: "#7983bb",
    borderColor: "#434968",
  },
  enableMenuLocalStorage: true,
};

let assetsPath = document.documentElement.getAttribute("data-assets-path"),
  templateName = document.documentElement.getAttribute("data-template"),
  rtlSupport = true;

if (typeof TemplateCustomizer !== "undefined") {
  window.templateCustomizer = new TemplateCustomizer({
    cssPath: assetsPath + "vendor/css" + (rtlSupport ? "/rtl" : "") + "/",
    themesPath: assetsPath + "vendor/css" + (rtlSupport ? "/rtl" : "") + "/",
    displayCustomizer: true,
    defaultShowDropdownOnHover: true,
  });
}
