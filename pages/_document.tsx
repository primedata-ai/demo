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

        <body className={"animsitio3n"}>
          <Main/>
          <NextScript/>

          <script async src="/vendor/jquery/jquery-3.2.1.min.js"></script>
          <script async src="/vendor/animsition/js/animsition.min.js"></script>
          <script async src="/vendor/bootstrap/js/popper.js"></script>
          <script async src="/vendor/bootstrap/js/bootstrap.min.js"></script>
          <script async src="/vendor/select2/select2.min.js"></script>

          {/*<script*/}
          {/*  dangerouslySetInnerHTML={{*/}
          {/*    __html: `*/}
          {/*  $(".js-select2").each(function(){*/}
          {/*  $(this).select2({*/}
          {/*    minimumResultsForSearch: 20,*/}
          {/*    dropdownParent: $(this).next('.dropDownSelect2')*/}
          {/*  });*/}
          {/*})`}}*/}
          {/*/>*/}

          <script async src="/vendor/daterangepicker/moment.min.js"></script>
          <script async src="/vendor/daterangepicker/daterangepicker.js"></script>
          <script async src="/vendor/slick/slick.min.js"></script>
          <script async src="/js/slick-custom.js"></script>
          <script async src="/vendor/parallax100/parallax100.js"></script>
          {/*<script dangerouslySetInnerHTML={{__html: `$('.parallax100').parallax100();`}}/>*/}

          <script async src="/vendor/MagnificPopup/jquery.magnific-popup.min.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument