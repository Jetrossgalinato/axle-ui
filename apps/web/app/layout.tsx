import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "./fonts/SF-Pro-Display-Regular.otf",
});

export const metadata: Metadata = {
  title: "axle/ui",
  description: "component library for professional looking design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  );
}
