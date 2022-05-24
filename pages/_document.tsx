import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Home</title>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="https://dev.primedata.ai/primedata_logo.png"/>

          {/*===============================================================================================*/}
          <link rel="stylesheet" type="text/css" href="/vendor/bootstrap/css/bootstrap.min.css"/>

          {/*===============================================================================================*/}
          <link rel="stylesheet" type="text/css" href="/fonts/font-awesome-4.7.0/css/font-awesome.min.css"/>
          <link rel="stylesheet" type="text/css" href="/fonts/iconic/css/material-design-iconic-font.min.css"/>
          <link rel="stylesheet" type="text/css" href="/fonts/linearicons-v1.0.0/icon-font.min.css"/>

          {/*===============================================================================================*/}
          <link rel="stylesheet" type="text/css" href="/vendor/animate/animate.css"/>
          <link rel="stylesheet" type="text/css" href="/vendor/css-hamburgers/hamburgers.min.css"/>
          <link rel="stylesheet" type="text/css" href="/vendor/animsition/css/animsition.min.css"/>
          <link rel="stylesheet" type="text/css" href="/vendor/select2/select2.min.css"/>
          <link rel="stylesheet" type="text/css" href="/vendor/daterangepicker/daterangepicker.css"/>
          <link rel="stylesheet" type="text/css" href="/vendor/slick/slick.css"/>
          <link rel="stylesheet" type="text/css" href="/vendor/MagnificPopup/magnific-popup.css"/>
          <link rel="stylesheet" type="text/css" href="/vendor/perfect-scrollbar/perfect-scrollbar.css"/>

          {/*===============================================================================================*/}
          <link rel="stylesheet" type="text/css" href="/css/util.css"/>
          <link rel="stylesheet" type="text/css" href="/css/main.css"/>


        </Head>

        <body className={"animsition"}>
          <Main/>
          <NextScript/>

        </body>
      </Html>
    )
  }
}

export default MyDocument