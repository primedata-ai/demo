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