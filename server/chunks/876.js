"use strict";
exports.id = 876;
exports.ids = [876];
exports.modules = {

/***/ 876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Px": () => (/* binding */ view_cart),
/* harmony export */   "R": () => (/* binding */ add_to_cart),
/* harmony export */   "Xe": () => (/* binding */ view_product_details)
/* harmony export */ });
/* unused harmony exports identify, page_view, button_click, checkout, view_category */
// @ts-ignore
const tracker =  false ? 0 : {};
const identify = (user)=>{
    let email = user.email;
    let data = {
        ...user,
        first_name: email
    };
    tracker.identify(email, data);
};
const page_view = ()=>{
    let desc = document.head.querySelector("meta[name=description]");
    const data = {
        route: window.location.href,
        title: window.document.title,
        // @ts-ignore
        description: desc ? desc?.content : "Not found description",
        referrer: window.document.referrer
    };
    tracker.track("cdp_page_view", data);
};
const button_click = (properties)=>{
    const { name , description  } = properties;
    const data = {
        route: window.location.href,
        page: window.document.title,
        name: name,
        description: description
    };
    tracker.track("cdp_button_click", data);
};
const add_to_cart = (props)=>{
    tracker.track("demo-add-to-cart", props);
};
const checkout = (props)=>{
    tracker.track("demo-check-out", props);
};
const view_product_details = (props)=>{
    tracker.track("demo-view-product-details", props);
};
const view_cart = (props)=>{
    tracker.track("cart_viewed", props);
};
const view_category = (props)=>{
    tracker.track("view-category", props);
};


/***/ })

};
;