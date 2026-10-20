import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aamogh Sawant",
  description:
    "Computer science at Georgia Tech. President of DS@GT. Personal site for Mandoo and other work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
