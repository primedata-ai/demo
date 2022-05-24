import "../styles/globals.css";
import type {AppProps} from "next/app";
import React from "react";
import Header from "components/containers/Header";
import Footer from "components/containers/Footer";
import CardHeader from "../components/containers/CardHeader";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <Footer/>
    </React.Fragment>
  );
}

export default MyApp;