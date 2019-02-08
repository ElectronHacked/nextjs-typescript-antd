// ./pages/_document.js
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import htmlescape from 'htmlescape';
import config from 'config';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                __CONFIG__ = ${htmlescape(config)}
              `,
            }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}
