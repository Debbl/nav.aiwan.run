import { Head, Main, NextScript } from "next/document";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Document() {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
      </Head>
      <body className="bg-[#eee]">
        <Main />
        <NextScript />
        <SpeedInsights />
      </body>
    </html>
  );
}
