"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_containers_ProductDetailPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(426);
/* harmony import */ var _components_containers_CollectionSlidesOverview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67);
/* harmony import */ var _components_containers_ProductBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(537);
/* harmony import */ var _components_containers_ProductListSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(275);
/* harmony import */ var _components_containers_CartHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(799);
/* harmony import */ var _components_containers_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(927);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_9__);










async function getStaticProps({ locale  }) {
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_9__.serverSideTranslations)(locale, [
                "common"
            ])
        }
    };
}
const Home = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_containers_Header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                menuActive: "index"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_containers_CartHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_containers_CollectionSlidesOverview__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_containers_ProductBanner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_containers_ProductListSection__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                hasTitle: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "btn-back-to-top",
                id: "myBtn",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "symbol-btn-back-to-top",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "zmdi zmdi-chevron-up"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_containers_ProductDetailPopup__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                src: "/vendor/jquery/jquery-3.2.1.min.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                src: "/vendor/animsition/js/animsition.min.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                src: "/vendor/bootstrap/js/popper.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                src: "/vendor/bootstrap/js/bootstrap.min.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                src: "/vendor/select2/select2.min.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                src: "/vendor/MagnificPopup/jquery.magnific-popup.min.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                src: "/vendor/parallax100/parallax100.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                src: "/vendor/perfect-scrollbar/perfect-scrollbar.min.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                src: "/vendor/slick/slick.min.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                src: "/vendor/daterangepicker/moment.min.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                src: "/vendor/daterangepicker/daterangepicker.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                async: true,
                src: "/js/slick-custom.js",
                strategy: "afterInteractive"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                strategy: "afterInteractive",
                type: "text/javascript",
                children: `
            $(".js-select2").each(function(){
              $(this).select2({
                minimumResultsForSearch: 20,
                dropdownParent: $(this).next('.dropDownSelect2')
              });
          })`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                async: true,
                strategy: "afterInteractive",
                children: `$('.parallax100').parallax100();`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                async: true,
                strategy: "afterInteractive",
                children: `
            $('.gallery-lb').each(function() { // the containers for all your galleries
              $(this).magnificPopup({
                delegate: 'a', // the selector for gallery item
                type: 'image',
                gallery: {
                  enabled:true
                },
                mainClass: 'mfp-fade'
              });
            });
          `
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                async: true,
                src: "/vendor/isotope/isotope.pkgd.min.js",
                strategy: "afterInteractive"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                async: true,
                src: "/vendor/sweetalert/sweetalert.min.js",
                strategy: "afterInteractive"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                async: true,
                strategy: "afterInteractive",
                children: `
            $('.js-addwish-b2').on('click', function(e){
              e.preventDefault();
            });
          
            $('.js-addwish-b2').each(function(){
              var nameProduct = $(this).parent().parent().find('.js-name-b2').html();
              $(this).on('click', function(){
                swal(nameProduct, "is added to wishlist !", "success");
          
                $(this).addClass('js-addedwish-b2');
                $(this).off('click');
              });
            });
          
            $('.js-addwish-detail').each(function(){
              var nameProduct = $(this).parent().parent().parent().find('.js-name-detail').html();
          
              $(this).on('click', function(){
                swal(nameProduct, "is added to wishlist !", "success");
          
                $(this).addClass('js-addedwish-detail');
                $(this).off('click');
              });
            });
          
            /*---------------------------------------------*/
          
            $('.js-addcart-detail').each(function(){
              var nameProduct = $(this).parent().parent().parent().parent().find('.js-name-detail').html();
              $(this).on('click', function(){
                swal(nameProduct, "is added to cart !", "success");
              });
            });
          `
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                async: true,
                strategy: "afterInteractive",
                children: `
            $('.js-pscroll').each(function(){
              $(this).css('position','relative');
              $(this).css('overflow','hidden');
              var ps = new PerfectScrollbar(this, {
                wheelSpeed: 1,
                scrollingThreshold: 1000,
                wheelPropagation: false,
              });
          
              $(window).on('resize', function(){
                ps.update();
              })
            });
          `
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {
                async: true,
                src: "/js/main.js",
                strategy: "afterInteractive"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ 377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [718,876,426,275,537,67], () => (__webpack_exec__(186)));
module.exports = __webpack_exports__;

})();