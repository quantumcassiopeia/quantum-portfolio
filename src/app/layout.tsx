import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { Providers } from "./Providers";

const switzerDefault = localFont({
  src: "../../public/fonts/switzer/Switzer-Medium.woff2",
});

export const metadata: Metadata = {
  title: "Quamtum Solutions",
  description: "Create intuitive digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${switzerDefault.className} antialiased flex relative flex-col md:text-[1.125rem] overflow-x-hidden min-h-screen max-w-screen-2xl self-center mx-auto`}
      >
        <Providers>
          <Header />
          <main className="h-full">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
