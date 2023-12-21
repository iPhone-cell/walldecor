/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("\r\n// Mask for phone number\r\nIMask(\r\n    document.getElementById('phone-mask'),\r\n    {\r\n      mask: '+{7}(000)000-00-00'\r\n    }\r\n  )\r\n\r\n//   Slider\r\n$('.slider').slick({\r\n\tspeed: 1000,\r\n\tslidesToShow: 1,\r\n\tslidesToScroll: 1,\r\n\tfade: true,\r\n\tautoplay: true,\r\n\tautoplaySpeed: 2000,\r\n\tinfinite: true,\r\n\tprevArrow: '<div class=\"section-top-count slider-arrow left\"><svg class=\"circle-icon\"><use xlink:href=\"assets/images/sprite.svg#circle\"></use></use></svg></svg><div><svg class=\"arrow-icon\"><use xlink:href=\"assets/images/sprite.svg#arrow\"></use></use></svg></svg></div>',\r\n\tnextArrow:  '<div class=\"section-top-count slider-arrow right\"><svg class=\"circle-icon\"><use xlink:href=\"assets/images/sprite.svg#circle\"></use></use></svg></svg><div><svg class=\"arrow-icon\"><use xlink:href=\"assets/images/sprite.svg#arrow\"></use></use></svg></svg></div>',\r\n});\r\n\r\n$('.advantages-slider').slick({\r\n\tspeed: 1000,\r\n\tslidesToShow: 2,\r\n\tslidesToScroll: 2,\r\n\tautoplaySpeed: 2000,\r\n\tinfinite: true,\r\n\tprevArrow: '<div class=\"section-top-count slider-arrow left\"><svg class=\"circle-icon\"><use xlink:href=\"assets/images/sprite.svg#circle\"></use></use></svg></svg><div><svg class=\"arrow-icon\"><use xlink:href=\"assets/images/sprite.svg#arrow\"></use></use></svg></svg></div>',\r\n\tnextArrow:  '<div class=\"section-top-count slider-arrow right\"><svg class=\"circle-icon\"><use xlink:href=\"assets/images/sprite.svg#circle\"></use></use></svg></svg><div><svg class=\"arrow-icon\"><use xlink:href=\"assets/images/sprite.svg#arrow\"></use></use></svg></svg></div>',\r\n});\r\n\r\n// Hamburger\r\nconst hamburger = document.querySelector('.hamburger'),\r\n    menu = document.querySelector('.menu'),\r\n    closeElem = document.querySelector('.menu__close');\r\n\r\nhamburger.addEventListener('click', () => {\r\n    menu.classList.add('active');\r\n});\r\n\r\ncloseElem.addEventListener('click', () => {\r\n    menu.classList.remove('active');\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;