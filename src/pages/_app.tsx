import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "../styles/global.scss";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>digitalpierce.com: Home of Ray Pierce</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Hello, my name is: Ray Pierce." />
      <meta property="og:title" content="Hello, my name is: Ray Pierce." />
      <meta property="og:site_name" content="digitalpierce.com" />
      <meta property="og:url" content="https://digitalpierce.com" />
      <meta
        property="og:description"
        content="This is a little about me and what I do."
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@pierceray" />
      <meta name="twitter:title" content="Hello, my name is: Ray Pierce." />
      <meta
        name="twitter:description"
        content="This is a little about me and what I do."
      />
      <meta name="twitter:url" content="https://digitalpierce.com" />
      <meta name="viewport" content="width=device-width" />
      <meta
        name="google-site-verification"
        content="sGiaP8SrZ5Fp5jBANiNwae-rmS2Nmy0eq9lf37nFuXw"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
      <link rel="dns-prefetch" href="https://csi.gstatic.com" />
      <link rel="dns-prefetch" href="https://tpc.googlesyndication.com" />
    </Head>

    <div id="container">
      <Component {...pageProps} />
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3793640569591407"
        strategy="afterInteractive"
      />
      <ins
        className="adsbygoogle homepagead"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3793640569591407"
        data-ad-slot="5368212779"
        data-ad-format="auto"
      ></ins>
      <Script id="googleadsense">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3VVX272ZGJ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3VVX272ZGJ');
        `}
      </Script>
      <footer>&copy; 2022 Ray Pierce</footer>
    </div>
  </>
);

export default App;
