import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Edward Maene — Master Carver & Architectural Sculptor",
  description:
    "Edward Maene (1852–1931), Belgian-American master woodcarver and architectural sculptor. Author of the finest hand-carved Gothic woodwork in the United States, including the Washington Memorial Chapel at Valley Forge.",
  openGraph: {
    title: "Edward Maene — Master Carver & Architectural Sculptor",
    description:
      "Belgian-American master craftsman whose hand-carved woodwork and stonework grace Philadelphia's most celebrated churches and institutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
