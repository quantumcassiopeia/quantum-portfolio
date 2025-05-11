import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${switzerDefault.className} antialiased max-w-screen-2xl self-center mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
