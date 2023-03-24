import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
      </Head>
      <body className="bg-[#eee]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
