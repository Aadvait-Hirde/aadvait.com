import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Aadvait Hirde",
  description: "Aadvait's portfolio website! I'm a web developer and AI researcher with experience building scalable products and working with early-stage startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} font-sans antialiased`}
        style={{ fontFamily: '"Instrument Sans", sans-serif' }}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
