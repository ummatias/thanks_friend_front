import { NextPage } from "next";
import Document, { Main, NextScript } from "next/document";
import Head from "next/head";
import React from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: NextPage) => (props: any) =>
          sheet.collectStyles(<App {...props} />),
        enchanceComponent: (Component: React.Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <html>
          <Head>
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,900;1,900&family=Roboto:wght@400;700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <body>
            {initialProps.styles}
            {sheet.getStyleElement()}
            <Main />
            <NextScript />
          </body>
        </html>
      ),
    };
  }
}
