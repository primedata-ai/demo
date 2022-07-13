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
  let desc = document.head.querySelector("meta[name=description]") || "Not found description";

  const data = {
    route: window.location.href,
    title: window.document.title,
    // @ts-ignore
    description: desc,
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
  tracker.track("demo-add-to-cart", {
    properties: {...props}
  });
}

export const checkout = (props?: any) => {
  tracker.track("demo-check-out", {
    properties: {...props}
  });
}

export const view_product_details = (props?: any) => {
  tracker.track("demo-view-product-details", {
    properties: {...props}
  });
}

export const view_cart = (props?: any) => {
  tracker.track("cart_viewed", {
    properties: {...props}
  });
}

export const view_category = (props?: any) => {
  tracker.track("view-category", {
    properties: {...props}
  });
}

export const contact_form_submitted = (props?: any) => {
  tracker.track("contact_form_submitted", {
    properties: {...props}
  });
}

export const LeadFormSubmitted = (props?: any) => {
  tracker.track("LeadFormSubmitted", {
    properties: {...props}
  });
}