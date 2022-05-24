import React from "react";
import type {NextPage} from 'next'
import Script from 'next/script'
import AboutContainer from "../components/containers/AboutContainer";
import Breadcrumb from "../components/containers/Breadcrumb";
import Header from "../components/containers/Header";
import CartHeader from "../components/containers/CartHeader";

const About: NextPage = () => {

  return (
    <React.Fragment>

      <Header className={"header-v4"}/>

      <CartHeader/>

      <AboutContainer/>

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

      <Script strategy="afterInteractive" type="text/javascript">{
        `
            $(".js-select2").each(function(){
              $(this).select2({
                minimumResultsForSearch: 20,
                dropdownParent: $(this).next('.dropDownSelect2')
              });
          })`
      }</Script>

      <Script async src="/vendor/isotope/isotope.pkgd.min.js" strategy="afterInteractive"></Script>
      <Script async src="/vendor/sweetalert/sweetalert.min.js" strategy="afterInteractive"></Script>


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

export default About