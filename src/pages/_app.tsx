import { ReactNode, ReactElement } from "react";
import Script from "next/script";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "@/components/Head";
import "../styles/global.scss";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Head />
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
    </>
  );
};

export default App;
