import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { Providers } from "./Providers";
import SocialMediaLinks from "@/components/SocialMediaLinks";

const switzerDefault = localFont({
  src: "../../public/fonts/switzer/Switzer-Medium.woff2",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--jetbrains-mono",
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
        className={`${switzerDefault.className} ${jetBrainsMono.variable} antialiased flex relative flex-col md:text-[1.125rem] overflow-x-hidden min-h-screen max-w-screen-2xl self-center mx-auto`}
      >
        <Providers>
          <SocialMediaLinks position="fixed" />
          <Header />
          <main className="h-full">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
