"use client";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import HamburgerMenu from "@/components/HamburgerMenu";
import Navbar from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const lastScrollY = useRef(0);
  const [isMobileHeaderHidden, setIsMobileHeaderHidden] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (lastScrollY.current < currentScrollY && currentScrollY > 10) {
        setIsMobileHeaderHidden(true);
      } else {
        setIsMobileHeaderHidden(false);
      }

      setIsAtTop(currentScrollY < 10);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed shadow-md bg-[var(--bg-color)] h-16 md:h-20 left-0 right-0 top-0 z-50 transition-all duration-500 ease-in-out ${
        isAtTop ? "bg-transparent shadow-none" : ""
      } ${isMobileHeaderHidden ? "-translate-y-full" : ""} md:-translate-y-0`}
    >
      <div className="flex items-center justify-between max-w-screen-2xl w-full mx-auto md:pr-4 h-full">
        <div className="h-10 w-10 rounded-full ml-4"></div>
        <div className="flex items-center gap-x-3">
          <LocaleSwitcher />

          <div className="flex gap-5 items-center">
            <Navbar
              className="hidden md:flex gap-4"
              showHome={false}
              showThemeSwitcher
            />
            <HamburgerMenu className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
}
