import React from "react";

const SocialNetwork = () => {
  return (
    <div className="flex-w flex-m p-l-100 p-t-40 respon7">
      <div className="flex-m bor9 p-r-10 m-r-11">
        <a href="components/containers/SocialNetwork#"
           className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
           data-tooltip="Add to Wishlist">
          <i className="zmdi zmdi-favorite"/>
        </a>
      </div>
      <a href="components/containers/SocialNetwork#"
         className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
        <i className="fa fa-facebook"/>
      </a>
      <a href="components/containers/SocialNetwork#"
         className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
        <i className="fa fa-twitter"/>
      </a>
      <a href="components/containers/SocialNetwork#"
         className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
        <i className="fa fa-google-plus"/>
      </a>
    </div>
  )
}

export default SocialNetwork