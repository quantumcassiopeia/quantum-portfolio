"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import HamburgerMenu from "@/components/HamburgerMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth > 768;
      setIsDesktop((prev) => (prev !== desktop ? desktop : prev));
    };

    handleResize();
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
      className={`fixed h-20 left-0 right-0 top-0 z-50 transition-all duration-700 ease-in-out ${backgroundColor}`}
    >
      <div className="flex items-center justify-between max-w-screen-2xl w-full mx-auto px-10  h-full">
        <div>ÍCONE</div>
        <div className="flex gap-10 items-center">
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
