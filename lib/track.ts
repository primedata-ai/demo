interface ITracker {
  identify: (identifier: string, properties?: any) => void;
  track: (eventAlias: string, properties?: any) => void;
}

// @ts-ignore
const tracker: ITracker =  (typeof window !== 'undefined') ? window.follower : {}

export const identify = (user: any) => {
  let email = user.email;
  let data = {
    ...user,
    first_name: email,
  };
  tracker.identify(email, data);
};

export const page_view = () => {
  let desc = document.head.querySelector("meta[name=description]");

  const data = {
    route: window.location.href,
    title: window.document.title,
    // @ts-ignore
    description: desc ? desc?.content : "Not found description",
    referrer: window.document.referrer,
  };

  tracker.track("cdp_page_view", data);
};

export const button_click = (properties: any) => {
  const {name, description} = properties
  const data = {
    route: window.location.href,
    page: window.document.title,
    name: name,
    description: description,
  };
  tracker.track("cdp_button_click", data);
};

export const add_to_cart = (props?: any) => {
  tracker.track("demo-add-to-cart", props);
}

export const checkout = (props?: any) => {
  tracker.track("demo-check-out", props);
}

export const view_product_details = (props?: any) => {
  tracker.track("demo-view-product-details", props);
}

export const view_cart = (props?: any) => {
  tracker.track("cart_viewed", props);
}

export const view_category = (props?: any) => {
  tracker.track("view-category", props);
}