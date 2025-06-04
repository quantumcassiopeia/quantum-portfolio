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
      className={`fixed shadow-md bg-[var(--bg-color)] left-0 w-full h-16 md:h-20 z-50 transition-all duration-500 ease-in-out ${
        isAtTop ? "bg-transparent shadow-none" : ""
      } ${isMobileHeaderHidden ? "-translate-y-full" : ""} md:-translate-y-0`}
    >
      <div className="flex items-center max-w-screen-2xl w-full h-full mx-auto px-4 ">
        <div className="h-10 w-10 rounded-full mr-auto"></div>
        <LocaleSwitcher />
        <Navbar
          className="hidden md:flex gap-4"
          showHome={false}
          showThemeSwitcher
        />
        <HamburgerMenu className="md:hidden" color="var(--bg-color-invert)" />
      </div>
    </header>
  );
}
