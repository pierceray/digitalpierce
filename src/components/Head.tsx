import NextHead from "next/head";

const Head: React.FC = () => (
  <NextHead>
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
    <meta name="viewport" content="width=device-width" />
    <meta
      name="google-site-verification"
      content="sGiaP8SrZ5Fp5jBANiNwae-rmS2Nmy0eq9lf37nFuXw"
    />
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
    <link rel="dns-prefetch" href="https://csi.gstatic.com" />
    <link rel="dns-prefetch" href="https://tpc.googlesyndication.com" />
  </NextHead>
);

export default Head;
