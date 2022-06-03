"use strict";
(() => {
var exports = {};
exports.id = 905;
exports.ids = [905];
exports.modules = {

/***/ 864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/containers/ProductDetailPopup.tsx
var ProductDetailPopup = __webpack_require__(426);
// EXTERNAL MODULE: external "next/script"
var script_ = __webpack_require__(780);
var script_default = /*#__PURE__*/__webpack_require__.n(script_);
// EXTERNAL MODULE: ./components/containers/Header.tsx
var Header = __webpack_require__(927);
// EXTERNAL MODULE: ./components/containers/CartHeader.tsx
var CartHeader = __webpack_require__(799);
// EXTERNAL MODULE: ./components/containers/Breadcrumb.tsx
var Breadcrumb = __webpack_require__(146);
// EXTERNAL MODULE: ./lib/track.ts
var track = __webpack_require__(876);
;// CONCATENATED MODULE: ./components/containers/ProductDetailSection.tsx



const ProductDetailSection = (props)=>{
    (0,external_react_.useEffect)(()=>{
        (0,track/* view_product_details */.Xe)();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "sec-product-detail bg0 p-t-65 p-b-60",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-6 col-lg-7 p-b-30",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "p-l-25 p-r-30 p-lr-0-lg",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "wrap-slick3 flex-sb flex-w",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "wrap-slick3-dots"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "wrap-slick3-arrows flex-sb-m flex-w"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "slick3 gallery-lb",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "item-slick3",
                                                                "data-thumb": "/images/product-detail-01.jpg",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "wrap-pic-w pos-relative",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/images/product-detail-01.jpg",
                                                                            alt: "IMG-PRODUCT"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            className: "flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04",
                                                                            href: "/images/product-detail-01.jpg",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fa fa-expand"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "item-slick3",
                                                                "data-thumb": "/images/product-detail-02.jpg",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "wrap-pic-w pos-relative",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/images/product-detail-02.jpg",
                                                                            alt: "IMG-PRODUCT"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            className: "flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04",
                                                                            href: "/images/product-detail-02.jpg",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fa fa-expand"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "item-slick3",
                                                                "data-thumb": "/images/product-detail-03.jpg",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "wrap-pic-w pos-relative",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/images/product-detail-03.jpg",
                                                                            alt: "IMG-PRODUCT"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            className: "flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04",
                                                                            href: "/images/product-detail-03.jpg",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fa fa-expand"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-6 col-lg-5 p-b-30",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "p-r-50 p-t-5 p-lr-0-lg",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "mtext-105 cl2 js-name-detail p-b-14",
                                                    children: "Lightweight Jacket"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "mtext-106 cl2",
                                                    children: "$58.79"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "stext-102 cl3 p-t-23",
                                                    children: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "p-t-33",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex-w flex-r-m p-b-10",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "size-203 flex-c-m respon6",
                                                                    children: "Size"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "size-204 respon6-next",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "rs1-select2 bor8 bg0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                                                className: "js-select2",
                                                                                name: "time",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                        children: "Choose an option"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                        children: "Size S"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                        children: "Size M"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                        children: "Size L"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                        children: "Size XL"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "dropDownSelect2"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex-w flex-r-m p-b-10",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "size-203 flex-c-m respon6",
                                                                    children: "Color"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "size-204 respon6-next",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "rs1-select2 bor8 bg0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                                                className: "js-select2",
                                                                                name: "time",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                        children: "Choose an option"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                        children: "Red"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                        children: "Blue"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                        children: "White"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                        children: "Grey"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "dropDownSelect2"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "flex-w flex-r-m p-b-10",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "size-204 flex-w flex-m respon6-next",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "wrap-num-product flex-w m-r-20 m-tb-10",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fs-16 zmdi zmdi-minus"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                className: "mtext-104 cl3 txt-center num-product",
                                                                                type: "number",
                                                                                name: "num-product",
                                                                                defaultValue: 1
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fs-16 zmdi zmdi-plus"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                        onClick: ()=>(0,track/* add_to_cart */.R)()
                                                                        ,
                                                                        className: "flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail",
                                                                        children: "Add to cart"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex-w flex-m p-l-100 p-t-40 respon7",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "flex-m bor9 p-r-10 m-r-11",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                className: "fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100",
                                                                "data-tooltip": "Add to Wishlist",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "zmdi zmdi-favorite"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100",
                                                            "data-tooltip": "Facebook",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa fa-facebook"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100",
                                                            "data-tooltip": "Twitter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa fa-twitter"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100",
                                                            "data-tooltip": "Google Plus",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa fa-google-plus"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bor10 m-t-50 p-t-43 p-b-40",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "tab01",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "nav nav-tabs",
                                            role: "tablist",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "nav-item p-b-10",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "nav-link active",
                                                        "data-toggle": "tab",
                                                        href: "#description",
                                                        role: "tab",
                                                        children: "Description"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "nav-item p-b-10",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "nav-link",
                                                        "data-toggle": "tab",
                                                        href: "#information",
                                                        role: "tab",
                                                        children: "Additional information"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "nav-item p-b-10",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "nav-link",
                                                        "data-toggle": "tab",
                                                        href: "#reviews",
                                                        role: "tab",
                                                        children: "Reviews (1)"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "tab-content p-t-43",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "tab-pane fade show active",
                                                    id: "description",
                                                    role: "tabpanel",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "how-pos2 p-lr-15-md",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "stext-102 cl6",
                                                            children: "Aenean sit amet gravida nisi. Nam fermentum est felis, quis feugiat nunc fringilla sit amet. Ut in blandit ipsum. Quisque luctus dui at ante aliquet, in hendrerit lectus interdum. Morbi elementum sapien rhoncus pretium maximus. Nulla lectus enim, cursus et elementum sed, sodales vitae eros. Ut ex quam, porta consequat interdum in, faucibus eu velit. Quisque rhoncus ex ac libero varius molestie. Aenean tempor sit amet orci nec iaculis. Cras sit amet nulla libero. Curabitur dignissim, nunc nec laoreet consequat, purus nunc porta lacus, vel efficitur tellus augue in ipsum. Cras in arcu sed metus rutrum iaculis. Nulla non tempor erat. Duis in egestas nunc."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "tab-pane fade",
                                                    id: "information",
                                                    role: "tabpanel",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "row",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-sm-10 col-md-8 col-lg-6 m-lr-auto",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "p-lr-28 p-lr-15-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        className: "flex-w flex-t p-b-7",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "stext-102 cl3 size-205",
                                                                                children: "Weight"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "stext-102 cl6 size-206",
                                                                                children: "0.79 kg"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        className: "flex-w flex-t p-b-7",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "stext-102 cl3 size-205",
                                                                                children: "Dimensions"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "stext-102 cl6 size-206",
                                                                                children: "110 x 33 x 100 cm"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        className: "flex-w flex-t p-b-7",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "stext-102 cl3 size-205",
                                                                                children: "Materials"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "stext-102 cl6 size-206",
                                                                                children: "60% cotton"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        className: "flex-w flex-t p-b-7",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "stext-102 cl3 size-205",
                                                                                children: "Color"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "stext-102 cl6 size-206",
                                                                                children: "Black, Blue, Grey, Green, Red, White"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        className: "flex-w flex-t p-b-7",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "stext-102 cl3 size-205",
                                                                                children: "Size"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "stext-102 cl6 size-206",
                                                                                children: "XL, L, M, S"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "tab-pane fade",
                                                    id: "reviews",
                                                    role: "tabpanel",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "row",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-sm-10 col-md-8 col-lg-6 m-lr-auto",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "p-b-30 m-lr-15-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "flex-w flex-t p-b-68",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                    src: "/images/avatar-01.jpg",
                                                                                    alt: "AVATAR"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "size-207",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                        className: "flex-w flex-sb-m p-b-17",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                className: "mtext-107 cl2 p-r-20",
                                                                                                children: "Ariana Grande"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                                className: "fs-18 cl11",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "zmdi zmdi-star"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "zmdi zmdi-star"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "zmdi zmdi-star"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "zmdi zmdi-star"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "zmdi zmdi-star-half"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        className: "stext-102 cl6",
                                                                                        children: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                                        className: "w-full",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                                className: "mtext-108 cl2 p-b-7",
                                                                                children: "Add a review"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                className: "stext-102 cl6",
                                                                                children: "Your email address will not be published. Required fields are marked *"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "flex-w flex-m p-t-50 p-b-23",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "stext-102 cl3 m-r-16",
                                                                                        children: "Your Rating"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                        className: "wrap-rating fs-18 cl11 pointer",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "item-rating pointer zmdi zmdi-star-outline"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "item-rating pointer zmdi zmdi-star-outline"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "item-rating pointer zmdi zmdi-star-outline"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "item-rating pointer zmdi zmdi-star-outline"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "item-rating pointer zmdi zmdi-star-outline"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                                className: "dis-none",
                                                                                                type: "number",
                                                                                                name: "rating"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "row p-b-25",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                        className: "col-12 p-b-5",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                                className: "stext-102 cl3",
                                                                                                htmlFor: "review",
                                                                                                children: "Your review"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                                                                className: "size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10",
                                                                                                id: "review",
                                                                                                name: "review",
                                                                                                defaultValue: ""
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                        className: "col-sm-6 p-b-5",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                                className: "stext-102 cl3",
                                                                                                htmlFor: "name",
                                                                                                children: "Name"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                                className: "size-111 bor8 stext-102 cl2 p-lr-20",
                                                                                                id: "name",
                                                                                                type: "text",
                                                                                                name: "name"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                        className: "col-sm-6 p-b-5",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                                className: "stext-102 cl3",
                                                                                                htmlFor: "email",
                                                                                                children: "Email"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                                className: "size-111 bor8 stext-102 cl2 p-lr-20",
                                                                                                id: "email",
                                                                                                type: "text",
                                                                                                name: "email"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                                className: "flex-c-m stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10",
                                                                                children: "Submit"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "stext-107 cl6 p-lr-25",
                                children: "SKU: JAK-01"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "stext-107 cl6 p-lr-25",
                                children: "Categories: Jacket, Men"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "sec-relate-product bg0 p-t-45 p-b-105",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "p-b-45",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "ltext-106 cl5 txt-center",
                                children: "Related Products"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "wrap-slick2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "slick2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "item-slick2 p-l-15 p-r-15 p-t-15 p-b-15",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "block2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "block2-pic hov-img0",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/images/product-01.jpg",
                                                            alt: "IMG-PRODUCT"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
                                                            children: "Quick View"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "block2-txt flex-w flex-t p-t-14",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "block2-txt-child1 flex-col-l ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "product-detail.html",
                                                                    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
                                                                    children: "Esprit Ruffle Shirt"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "stext-105 cl3",
                                                                    children: "$16.64"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "block2-txt-child2 flex-r p-t-3",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#",
                                                                className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "icon-heart1 dis-block trans-04",
                                                                        src: "/images/icons/icon-heart-01.png",
                                                                        alt: "ICON"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "icon-heart2 dis-block trans-04 ab-t-l",
                                                                        src: "/images/icons/icon-heart-02.png",
                                                                        alt: "ICON"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "item-slick2 p-l-15 p-r-15 p-t-15 p-b-15",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "block2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "block2-pic hov-img0",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/images/product-02.jpg",
                                                            alt: "IMG-PRODUCT"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
                                                            children: "Quick View"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "block2-txt flex-w flex-t p-t-14",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "block2-txt-child1 flex-col-l ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "product-detail.html",
                                                                    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
                                                                    children: "Herschel supply"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "stext-105 cl3",
                                                                    children: "$35.31"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "block2-txt-child2 flex-r p-t-3",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#",
                                                                className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "icon-heart1 dis-block trans-04",
                                                                        src: "/images/icons/icon-heart-01.png",
                                                                        alt: "ICON"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "icon-heart2 dis-block trans-04 ab-t-l",
                                                                        src: "/images/icons/icon-heart-02.png",
                                                                        alt: "ICON"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "item-slick2 p-l-15 p-r-15 p-t-15 p-b-15",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "block2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "block2-pic hov-img0",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/images/product-03.jpg",
                                                            alt: "IMG-PRODUCT"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
                                                            children: "Quick View"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "block2-txt flex-w flex-t p-t-14",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "block2-txt-child1 flex-col-l ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "product-detail.html",
                                                                    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
                                                                    children: "Only Check Trouser"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "stext-105 cl3",
                                                                    children: "$25.50"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "block2-txt-child2 flex-r p-t-3",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#",
                                                                className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "icon-heart1 dis-block trans-04",
                                                                        src: "/images/icons/icon-heart-01.png",
                                                                        alt: "ICON"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "icon-heart2 dis-block trans-04 ab-t-l",
                                                                        src: "/images/icons/icon-heart-02.png",
                                                                        alt: "ICON"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "item-slick2 p-l-15 p-r-15 p-t-15 p-b-15",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "block2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "block2-pic hov-img0",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/images/product-04.jpg",
                                                            alt: "IMG-PRODUCT"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
                                                            children: "Quick View"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "block2-txt flex-w flex-t p-t-14",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "block2-txt-child1 flex-col-l ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "product-detail.html",
                                                                    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
                                                                    children: "Classic Trench Coat"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "stext-105 cl3",
                                                                    children: "$75.00"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "block2-txt-child2 flex-r p-t-3",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#",
                                                                className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "icon-heart1 dis-block trans-04",
                                                                        src: "/images/icons/icon-heart-01.png",
                                                                        alt: "ICON"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "icon-heart2 dis-block trans-04 ab-t-l",
                                                                        src: "/images/icons/icon-heart-02.png",
                                                                        alt: "ICON"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "item-slick2 p-l-15 p-r-15 p-t-15 p-b-15",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "block2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "block2-pic hov-img0",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/images/product-05.jpg",
                                                            alt: "IMG-PRODUCT"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
                                                            children: "Quick View"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "block2-txt flex-w flex-t p-t-14",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "block2-txt-child1 flex-col-l ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "product-detail.html",
                                                                    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
                                                                    children: "Front Pocket Jumper"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "stext-105 cl3",
                                                                    children: "$34.75"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "block2-txt-child2 flex-r p-t-3",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#",
                                                                className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "icon-heart1 dis-block trans-04",
                                                                        src: "/images/icons/icon-heart-01.png",
                                                                        alt: "ICON"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "icon-heart2 dis-block trans-04 ab-t-l",
                                                                        src: "/images/icons/icon-heart-02.png",
                                                                        alt: "ICON"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "item-slick2 p-l-15 p-r-15 p-t-15 p-b-15",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "block2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "block2-pic hov-img0",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/images/product-06.jpg",
                                                            alt: "IMG-PRODUCT"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
                                                            children: "Quick View"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "block2-txt flex-w flex-t p-t-14",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "block2-txt-child1 flex-col-l ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "product-detail.html",
                                                                    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
                                                                    children: "Vintage Inspired Classic"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "stext-105 cl3",
                                                                    children: "$93.20"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "block2-txt-child2 flex-r p-t-3",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#",
                                                                className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "icon-heart1 dis-block trans-04",
                                                                        src: "/images/icons/icon-heart-01.png",
                                                                        alt: "ICON"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "icon-heart2 dis-block trans-04 ab-t-l",
                                                                        src: "/images/icons/icon-heart-02.png",
                                                                        alt: "ICON"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "item-slick2 p-l-15 p-r-15 p-t-15 p-b-15",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "block2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "block2-pic hov-img0",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/images/product-07.jpg",
                                                            alt: "IMG-PRODUCT"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
                                                            children: "Quick View"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "block2-txt flex-w flex-t p-t-14",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "block2-txt-child1 flex-col-l ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "product-detail.html",
                                                                    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
                                                                    children: "Shirt in Stretch Cotton"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "stext-105 cl3",
                                                                    children: "$52.66"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "block2-txt-child2 flex-r p-t-3",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#",
                                                                className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "icon-heart1 dis-block trans-04",
                                                                        src: "/images/icons/icon-heart-01.png",
                                                                        alt: "ICON"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "icon-heart2 dis-block trans-04 ab-t-l",
                                                                        src: "/images/icons/icon-heart-02.png",
                                                                        alt: "ICON"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "item-slick2 p-l-15 p-r-15 p-t-15 p-b-15",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "block2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "block2-pic hov-img0",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/images/product-08.jpg",
                                                            alt: "IMG-PRODUCT"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
                                                            children: "Quick View"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "block2-txt flex-w flex-t p-t-14",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "block2-txt-child1 flex-col-l ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "product-detail.html",
                                                                    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
                                                                    children: "Pieces Metallic Printed"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "stext-105 cl3",
                                                                    children: "$18.96"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "block2-txt-child2 flex-r p-t-3",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#",
                                                                className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "icon-heart1 dis-block trans-04",
                                                                        src: "/images/icons/icon-heart-01.png",
                                                                        alt: "ICON"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        className: "icon-heart2 dis-block trans-04 ab-t-l",
                                                                        src: "/images/icons/icon-heart-02.png",
                                                                        alt: "ICON"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const containers_ProductDetailSection = (ProductDetailSection);

// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(460);
;// CONCATENATED MODULE: ./pages/products/[slug].tsx









async function getServerSideProps({ locale  }) {
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common"
            ])
        }
    };
}
const ProductDetail = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "/vendor/jquery/jquery-3.2.1.min.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "/vendor/animsition/js/animsition.min.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "/vendor/bootstrap/js/popper.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "/vendor/bootstrap/js/bootstrap.min.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "/vendor/select2/select2.min.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "/vendor/MagnificPopup/jquery.magnific-popup.min.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "/vendor/parallax100/parallax100.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "/vendor/perfect-scrollbar/perfect-scrollbar.min.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "/vendor/slick/slick.min.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "/vendor/daterangepicker/moment.min.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "/vendor/daterangepicker/daterangepicker.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                async: true,
                src: "/js/slick-custom.js",
                strategy: "afterInteractive"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                menuActive: "products",
                className: "header-v4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CartHeader/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumb/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(containers_ProductDetailSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
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
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "btn-back-to-top",
                id: "myBtn",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "symbol-btn-back-to-top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "zmdi zmdi-chevron-up"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ProductDetailPopup/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                async: true,
                strategy: "afterInteractive",
                children: `$('.parallax100').parallax100();`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
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
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                async: true,
                src: "/vendor/isotope/isotope.pkgd.min.js",
                strategy: "afterInteractive"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                async: true,
                src: "/vendor/sweetalert/sweetalert.min.js",
                strategy: "afterInteractive"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
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
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
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
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                async: true,
                src: "/js/main.js",
                strategy: "afterInteractive"
            })
        ]
    });
};
/* harmony default export */ const _slug_ = (ProductDetail);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [718,876,426,146], () => (__webpack_exec__(864)));
module.exports = __webpack_exports__;

})();