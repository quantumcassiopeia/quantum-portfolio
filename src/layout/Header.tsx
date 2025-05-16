"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  const backgroundColor = isScrolled
    ? "shadow-md bg-[var(--bg-color)]"
    : "bg-transparent";

  return (
    <header
      className={`fixed h-20 left-0 right-0 top-0 z-50 transition-all duration-700 ease-in-out ${backgroundColor}`}
    >
      <div className="flex items-center max-w-screen-2xl mx-auto px-10 justify-between h-full">
        <div>ÍCONE</div>
        <div className="flex items-center gap-4">
          <Navbar className="flex gap-4" showHome={false} />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
