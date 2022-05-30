import "../styles/globals.css";
import "../public/vendor/bootstrap/css/bootstrap.min.css";


import "../public/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../public/fonts/iconic/css/material-design-iconic-font.min.css";
import "../public/fonts/linearicons-v1.0.0/icon-font.min.css";

import "../public/vendor/animate/animate.css";
import "../public/vendor/css-hamburgers/hamburgers.min.css";
import "../public/vendor/animsition/css/animsition.min.css";
import "../public/vendor/select2/select2.min.css";
import "../public/vendor/daterangepicker/daterangepicker.css";
import "../public/vendor/slick/slick.css";
import "../public/vendor/MagnificPopup/magnific-popup.css";
import "../public/vendor/perfect-scrollbar/perfect-scrollbar.css";

import "../public/css/util.css";
import "../public/css/main.css";

import type {AppProps} from "next/app";

import { appWithTranslation } from "next-i18next";
import Nexti18nConfig from '../next-i18next.config'

import React from "react";
import Footer from "components/containers/Footer";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <Footer/>
    </React.Fragment>
  );
}

export default appWithTranslation(MyApp, Nexti18nConfig);