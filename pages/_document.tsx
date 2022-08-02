import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
import React from "react";

class DocumentApp extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx)
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Home</title>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="https://dev.primedata.ai/primedata_logo.png"/>
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&amp;display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet"/>
          <script src={"/prime-sdk.js"} async={true}/>
        </Head>

        <body className={"animsition"}>
          <Main/>
          <NextScript/>

        </body>
      </Html>
    )
  }
}

export default DocumentApp;