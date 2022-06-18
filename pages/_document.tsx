import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Loved+by+the+King&display=swap&text=Ray%20Pierce"
          rel="stylesheet"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="crossorigin"
          type="font/woff2"
          href="https://fonts.gstatic.com/s/lovedbytheking/v9/Gw6gwdP76VDVJNXerebZxUMeRXUF2MiKn3BM2g65.woff2"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
