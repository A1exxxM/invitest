/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/accordion.js":
/*!*****************************!*\
  !*** ./src/js/accordion.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function showDescr() {
  const itemAccordion = document.querySelectorAll('.accordion__item');
  itemAccordion.forEach(item => {
    item.firstChild.addEventListener('click', () => {
      item.lastChild.classList.toggle('accordion__item-visible');
      item.firstChild.lastChild.classList.toggle('accordion__item-transformSquare');
    });
    item.lastChild.addEventListener('click', e => {
      if (e.target.classList.contains('accordion__item-visible')) {
        e.target.classList.toggle('accordion__item-visible');
        item.firstChild.lastChild.classList.toggle('accordion__item-transformSquare');
      }
    });
    item.lastChild.firstChild.addEventListener('click', e => {
      if (e.target.parentNode.classList.contains('accordion__item-visible')) {
        e.target.parentNode.classList.toggle('accordion__item-visible');
        item.firstChild.lastChild.classList.toggle('accordion__item-transformSquare');
      }
    });
    item.firstChild.addEventListener('mouseover', () => {
      item.firstChild.lastChild.classList.add('changePlus');
      item.firstChild.lastChild.firstChild.style.backgroundColor = '#000';
      item.firstChild.lastChild.lastChild.style.backgroundColor = '#000';
    });
    item.firstChild.addEventListener('mouseout', () => {
      item.firstChild.lastChild.classList.remove('changePlus');
      item.firstChild.lastChild.firstChild.style.backgroundColor = '#fff';
      item.firstChild.lastChild.lastChild.style.backgroundColor = '#fff';
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (showDescr);

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function animateHeader() {
  const navbar = document.querySelector('nav');

  function headerClass() {
    navbar.classList.remove('visible');
    navbar.classList.add('animate__animated');
    navbar.classList.add('animate__fadeInDown');
  }

  setTimeout(headerClass, 1500);
  const photo = document.querySelector('#photo'),
        products = document.querySelector('#products'),
        contacts = document.querySelector('#contacts'),
        faq = document.querySelector('#faq'),
        faqScrollPoint = document.querySelector('.accordion__item'),
        photoScrollPoint = document.querySelector('.slider'),
        productsScrollPoint = document.querySelector('.products'),
        contactsScrollPoint = document.querySelector('.contacts'),
        links = document.querySelectorAll('.header__list-item');

  function scrollWeb(selector, scrollPoint) {
    selector.addEventListener('mouseenter', e => {
      e.target.classList.add('changeColor');
    });
    selector.addEventListener('mouseleave', e => {
      e.target.classList.remove('changeColor');
    });
    selector.addEventListener('click', () => {
      scrollPoint.scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  scrollWeb(photo, photoScrollPoint);
  scrollWeb(products, productsScrollPoint);
  scrollWeb(contacts, contactsScrollPoint);
  scrollWeb(faq, faqScrollPoint);
}

/* harmony default export */ __webpack_exports__["default"] = (animateHeader);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/js/header.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ "./src/js/slider.js");
/* harmony import */ var _titlebox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./titlebox */ "./src/js/titlebox.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products */ "./src/js/products.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion */ "./src/js/accordion.js");
/* harmony import */ var _pageup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pageup */ "./src/js/pageup.js");






document.addEventListener('DOMContentLoaded', () => {
  Object(_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_titlebox__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_slider__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_products__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_accordion__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_pageup__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

/***/ }),

/***/ "./src/js/pageup.js":
/*!**************************!*\
  !*** ./src/js/pageup.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function pageUp() {
  const pageUpElem = document.querySelector('.pageup');
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1600) {
      pageUpElem.classList.add('pageup__active');
    } else {
      pageUpElem.classList.remove('pageup__active');
    }
  });
  const header = document.querySelector('header');
  pageUpElem.addEventListener('click', function () {
    if (this.classList.contains('pageup__active')) {
      header.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (pageUp);

/***/ }),

/***/ "./src/js/products.js":
/*!****************************!*\
  !*** ./src/js/products.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function changePrice() {
  const productPrice = document.querySelectorAll('.products__item-price'),
        productItem = document.querySelectorAll('.products__item');
  productItem.forEach(item => {
    item.addEventListener('mouseenter', e => {
      e.target.lastChild.textContent = '??????????????????';
    });
    item.addEventListener('mouseleave', e => {
      e.target.lastChild.textContent = '2000 ??.??';
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (changePrice);

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function sliderScroll() {
  const slides = document.querySelectorAll('.slider__slide'),
        slidesField = document.querySelector('.slider__content'),
        slidesWrapper = document.querySelector('.slider__content-inner'),
        prevArrow = document.querySelector('#left'),
        nextArrow = document.querySelector('#right'),
        width = window.getComputedStyle(slidesField).width;
  let offset = 0;
  let slideCount = slides.length;
  slidesWrapper.style.width = 100 * slideCount + '%';
  slidesField.style.overflow = 'hidden';
  slides.forEach(slide => {
    slide.style.width = width;
  });
  prevArrow.addEventListener('click', () => {
    if (offset == 0) {
      offset = +width.replace(/\D/g, '') * (slideCount - 1);
    } else {
      offset -= +width.replace(/\D/g, '');
    }

    slidesWrapper.style.transform = `translateX(-${offset}px)`;
  });
  nextArrow.addEventListener('click', () => {
    if (offset == +width.replace(/\D/g, '') * (slideCount - 1)) {
      offset = 0;
    } else {
      offset += +width.replace(/\D/g, '');
    }

    slidesWrapper.style.transform = `translateX(-${offset}px)`;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (sliderScroll);

/***/ }),

/***/ "./src/js/titlebox.js":
/*!****************************!*\
  !*** ./src/js/titlebox.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function animateBtn() {
  const navBlack = document.querySelector('.titlebox__btn');

  function btnClass() {
    navBlack.classList.remove('visible');
    navBlack.classList.add('animate__animated');
    navBlack.classList.add('animate__fadeInUp');
  }

  setTimeout(btnClass, 1500);
  const btn = document.querySelector('.titlebox__btn'),
        sliderWrapper = document.querySelector('.slider__content-inner');
  btn.addEventListener('click', () => {
    sliderWrapper.scrollIntoView({
      behavior: "smooth"
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (animateBtn);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map