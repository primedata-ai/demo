import React from 'react';
import Header from "components/containers/Header";
import CartHeader from "components/containers/CartHeader";
import Script from "next/script";
import {NextPage} from "next";
import RegisterContainer from "components/containers/RegisterContainer";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale } : {locale: string}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            // Will be passed to the page component as props
        },
    };
}


const SignUp: NextPage = () => {
  return (
    <React.Fragment>

      <Header menuActive={"login"} className={"header-v4"}/>
      <CartHeader/>

      <RegisterContainer/>

      <div className="btn-back-to-top" id="myBtn">
        <span className="symbol-btn-back-to-top">
          <i className="zmdi zmdi-chevron-up"></i>
        </span>
      </div>

      {/** Embeded script to products page */}
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
  );
};


export default SignUp;