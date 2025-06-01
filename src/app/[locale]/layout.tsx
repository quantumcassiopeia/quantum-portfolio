// General
import type { Metadata } from "next";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { Providers } from "./Providers";

// Styling

import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Layouts
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import SocialMediaLinks from "@/components/SocialMediaLinks";

const switzerDefault = localFont({
  src: "../../../public/fonts/switzer/Switzer-Medium.woff2",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Quantum Solutions",
  description: "Create intuitive digital experiences",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body
        className={`${switzerDefault.className} ${jetBrainsMono.variable} antialiased flex relative flex-col md:text-[1.125rem] overflow-x-clip min-h-screen max-w-screen-2xl self-center mx-auto`}
      >
        <NextIntlClientProvider>
          {" "}
          <Providers>
            <SocialMediaLinks position="fixed" />
            <Header />
            <main className="h-full">{children}</main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
