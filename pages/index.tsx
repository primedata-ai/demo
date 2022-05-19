import React from "react";
import type {NextPage} from 'next'
import ProductDetailPopup from "../components/containers/ProductDetailPopup";
import CollectionSlidesOverview from "../components/containers/CollectionSlidesOverview";
import Script from 'next/script'
import ProductBanner from "../components/containers/ProductBanner";
import ProductListSection from "../components/containers/ProductListSection";
import useTranslation from 'locales/useTranslation';

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      {/** Embeded script to home page */}
      <Script src="/vendor/jquery/jquery-3.2.1.min.js" strategy="beforeInteractive"></Script>
      <Script src="/vendor/animsition/js/animsition.min.js" strategy="beforeInteractive"></Script>
      <Script src="/vendor/bootstrap/js/popper.js" strategy="beforeInteractive"></Script>
      <Script src="/vendor/bootstrap/js/bootstrap.min.js" strategy="beforeInteractive"></Script>
      <Script src="/vendor/select2/select2.min.js" strategy="beforeInteractive"></Script>
      <Script src="/vendor/MagnificPopup/jquery.magnific-popup.min.js" strategy="beforeInteractive"></Script>
      <Script src="/vendor/parallax100/parallax100.js" strategy="beforeInteractive"></Script>
      <Script src="/vendor/perfect-scrollbar/perfect-scrollbar.min.js" strategy="beforeInteractive"></Script>
      <Script src="/vendor/slick/slick.min.js" strategy="beforeInteractive"></Script>
      <Script src="/vendor/daterangepicker/moment.min.js" strategy="beforeInteractive"></Script>
      <Script src="/vendor/daterangepicker/daterangepicker.js" strategy="beforeInteractive"></Script>
      <Script async src="/js/slick-custom.js" strategy="afterInteractive"></Script>
      {/* <Header/> */}

      <div className="wrap-header-cart js-panel-cart">
        <div className="s-full js-hide-cart"/>
        <div className="header-cart flex-col-l p-l-65 p-r-25">
          <div className="header-cart-title flex-w flex-sb-m p-b-8">
            <span className="mtext-103 cl2">
              Your Cart
            </span>
            <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
              <i className="zmdi zmdi-close"/>
            </div>
          </div>
          <div className="header-cart-content flex-w js-pscroll">
            <ul className="header-cart-wrapitem w-full">
              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="/images/item-cart-01.jpg" alt="IMG"/>
                </div>
                <div className="header-cart-item-txt p-t-8">
                  <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                    White Shirt Pleat
                  </a>
                  <span className="header-cart-item-info">
                    1 x $19.00
                  </span>
                </div>
              </li>
              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="/images/item-cart-02.jpg" alt="IMG"/>
                </div>
                <div className="header-cart-item-txt p-t-8">
                  <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                    Converse All Star
                  </a>
                  <span className="header-cart-item-info">
                    1 x $39.00
                  </span>
                </div>
              </li>
              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="/images/item-cart-03.jpg" alt="IMG"/>
                </div>
                <div className="header-cart-item-txt p-t-8">
                  <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                    Nixon Porter Leather
                  </a>
                  <span className="header-cart-item-info">
                    1 x $17.00
                  </span>
                </div>
              </li>
            </ul>
            <div className="w-full">
              <div className="header-cart-total w-full p-tb-40">
                Total: $75.00
              </div>
              <div className="header-cart-buttons flex-w w-full">
                <a href="/shoping-cart.html"
                   className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                  View Cart
                </a>
                <a href="/shoping-cart.html"
                   className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                  Check Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CollectionSlidesOverview/>

      <ProductBanner/>

      <ProductListSection/>

      {/* <Footer/> */}

      <div className="btn-back-to-top" id="myBtn">
        <span className="symbol-btn-back-to-top">
          <i className="zmdi zmdi-chevron-up"/>
        </span>
      </div>

      <ProductDetailPopup/>

      <Script async strategy="afterInteractive">{
        `
            $(".js-select2").each(function(){
            $(this).select2({
              minimumResultsForSearch: 20,
              dropdownParent: $(this).next('.dropDownSelect2')
            });
          })`
      }</Script>
      <Script async strategy="afterInteractive">{`$('.parallax100').parallax100();`}</Script>

      <Script async strategy="afterInteractive">
        {
          `
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
        }
      </Script>

      <Script async src="/vendor/isotope/isotope.pkgd.min.js" strategy="afterInteractive"></Script>
      <Script async src="/vendor/sweetalert/sweetalert.min.js" strategy="afterInteractive"></Script>

      <Script async strategy="afterInteractive">
        {
          `
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
        }
      </Script>

      <Script async strategy="afterInteractive">
        {
          `
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
        }
      </Script>

      <Script async src="/js/main.js" strategy="afterInteractive"></Script>
    </React.Fragment>
  )
}

export default Home