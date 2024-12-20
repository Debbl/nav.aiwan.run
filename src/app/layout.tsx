import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "nav.aiwan.run",
  description: "A navigation website",
  icons: ["favicon.svg"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#eee]">{children}</body>
    </html>
  );
}
