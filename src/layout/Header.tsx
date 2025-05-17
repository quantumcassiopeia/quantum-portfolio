"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import HamburgerMenu from "@/components/HamburgerMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 0);

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize(); // Chama inicialmente
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backgroundColor = isScrolled
    ? "shadow-md bg-[var(--bg-color)]"
    : "bg-transparent";

  return (
    <header
      className={`fixed h-16 md:h-20 left-0 right-0 top-0 z-50 transition-all duration-700 ease-in-out ${backgroundColor} ${
        showHeader ? "" : isDesktop ? "" : "translate-y-[-100%]"
      }`}
    >
      <div className="flex items-center justify-between max-w-screen-2xl w-full mx-auto md:pr-4 h-full">
        <div>ÍCONE</div>
        <div className="flex gap-5 items-center">
          <ThemeSwitcher />
          {isDesktop ? (
            <Navbar className="flex gap-4" showHome={false} />
          ) : (
            <HamburgerMenu />
          )}
        </div>
      </div>
    </header>
  );
}
