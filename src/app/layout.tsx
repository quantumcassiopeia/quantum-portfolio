import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Providers } from "./Providers";
import Footer from "@/layout/Footer";

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
        className={`${switzerDefault.className} antialiased flex flex-col md:text-[1.125rem] min-h-dvh max-w-screen-2xl self-center mx-auto`}
      >
        <Providers>
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
