import React from 'react';

const Sidebar = (props: any) => {
  return (
    <React.Fragment>

      <aside className="wrap-sidebar js-sidebar">
        <div className="s-full js-hide-sidebar"/>
        <div className="sidebar flex-col-l p-t-22 p-b-25">
          <div className="flex-r w-full p-b-30 p-r-27">
            <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-sidebar">
              <i className="zmdi zmdi-close"/>
            </div>
          </div>
          <div className="sidebar-content flex-w w-full p-lr-65 js-pscroll">
            <ul className="sidebar-link w-full">
              <li className="p-b-13">
                <a href="index.html" className="stext-102 cl2 hov-cl1 trans-04">
                  Home
                </a>
              </li>
              <li className="p-b-13">
                <a href="#" className="stext-102 cl2 hov-cl1 trans-04">
                  My Wishlist
                </a>
              </li>
              <li className="p-b-13">
                <a href="#" className="stext-102 cl2 hov-cl1 trans-04">
                  My Account
                </a>
              </li>
              <li className="p-b-13">
                <a href="#" className="stext-102 cl2 hov-cl1 trans-04">
                  Track Oder
                </a>
              </li>
              <li className="p-b-13">
                <a href="#" className="stext-102 cl2 hov-cl1 trans-04">
                  Refunds
                </a>
              </li>
              <li className="p-b-13">
                <a href="#" className="stext-102 cl2 hov-cl1 trans-04">
                  Help &amp; FAQs
                </a>
              </li>
            </ul>
            <div className="sidebar-gallery w-full p-tb-30">
              <span className="mtext-101 cl5">
                @ CozaStore
              </span>
              <div className="flex-w flex-sb p-t-36 gallery-lb">
                {/* item gallery sidebar */}
                <div className="wrap-item-gallery m-b-10">
                  <a className="item-gallery bg-img1" href="images/gallery-01.jpg" data-lightbox="gallery"
                     style={{backgroundImage: 'url("images/gallery-01.jpg")'}}/>
                </div>
                {/* item gallery sidebar */}
                <div className="wrap-item-gallery m-b-10">
                  <a className="item-gallery bg-img1" href="images/gallery-02.jpg" data-lightbox="gallery"
                     style={{backgroundImage: 'url("images/gallery-02.jpg")'}}/>
                </div>
                {/* item gallery sidebar */}
                <div className="wrap-item-gallery m-b-10">
                  <a className="item-gallery bg-img1" href="images/gallery-03.jpg" data-lightbox="gallery"
                     style={{backgroundImage: 'url("images/gallery-03.jpg")'}}/>
                </div>
                {/* item gallery sidebar */}
                <div className="wrap-item-gallery m-b-10">
                  <a className="item-gallery bg-img1" href="images/gallery-04.jpg" data-lightbox="gallery"
                     style={{backgroundImage: 'url("images/gallery-04.jpg")'}}/>
                </div>
                {/* item gallery sidebar */}
                <div className="wrap-item-gallery m-b-10">
                  <a className="item-gallery bg-img1" href="images/gallery-05.jpg" data-lightbox="gallery"
                     style={{backgroundImage: 'url("images/gallery-05.jpg")'}}/>
                </div>
                {/* item gallery sidebar */}
                <div className="wrap-item-gallery m-b-10">
                  <a className="item-gallery bg-img1" href="images/gallery-06.jpg" data-lightbox="gallery"
                     style={{backgroundImage: 'url("images/gallery-06.jpg")'}}/>
                </div>
                {/* item gallery sidebar */}
                <div className="wrap-item-gallery m-b-10">
                  <a className="item-gallery bg-img1" href="images/gallery-07.jpg" data-lightbox="gallery"
                     style={{backgroundImage: 'url("images/gallery-07.jpg")'}}/>
                </div>
                {/* item gallery sidebar */}
                <div className="wrap-item-gallery m-b-10">
                  <a className="item-gallery bg-img1" href="images/gallery-08.jpg" data-lightbox="gallery"
                     style={{backgroundImage: 'url("images/gallery-08.jpg")'}}/>
                </div>
                {/* item gallery sidebar */}
                <div className="wrap-item-gallery m-b-10">
                  <a className="item-gallery bg-img1" href="images/gallery-09.jpg" data-lightbox="gallery"
                     style={{backgroundImage: 'url("images/gallery-09.jpg")'}}/>
                </div>
              </div>
            </div>
            <div className="sidebar-gallery w-full">
              <span className="mtext-101 cl5">
                About Us
              </span>
              <p className="stext-108 cl6 p-t-27">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus vulputate hendrerit. Praesent
                faucibus erat vitae rutrum gravida. Vestibulum tempus mi enim, in molestie sem fermentum quis.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
};


export default Sidebar;