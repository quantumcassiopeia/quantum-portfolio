"use client";

import { LinkedIn, GitHub, WhatsApp, AttachEmail } from "@mui/icons-material";
import { useState, useEffect, useRef } from "react";
import { Link } from "@/i18n/navigation";

const iconStyle = {
  fontSize: "2.4rem",
  color: "#4b5563",
  "&:hover": {
    color: "#b35dff",
    cursor: "pointer",
    transform: "translateY(-4px)",
  },
  transition: "all 0.3s ease-in-out",
};

export default function SocialMediaLinks({
  position,
}: {
  position: "flex" | "fixed";
}) {
  const [showContent, setShowContent] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setShowContent(false);
      }, 1000);
      setShowContent(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <ul
      className={
        position === "flex"
          ? "flex flex-wrap md:max-w-[8rem]"
          : showContent
          ? "scale-75 fixed top-1/2 right-0 transform duration-300 ease-in-out -translate-y-1/2 z-40 bg-white py-2 px-1 rounded-3xl shadow-[0_3px_8px_rgba(0,0,0,0.24)]"
          : " translate-x-[100%] scale-75 fixed top-1/2 right-0 transform duration-300 ease-in-out -translate-y-1/2 z-40 bg-white py-2 px-1 rounded-3xl shadow-[0_3px_8px_rgba(0,0,0,0.24)]"
      }
    >
      <li>
        <Link href="/contact">
          <AttachEmail sx={iconStyle} />
        </Link>
      </li>
      <li>
        <a href="https://wa.me/5591985669109" target="_blank" rel="noreferrer">
          <WhatsApp sx={iconStyle} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/robert-rsouza/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn sx={iconStyle} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/quantumcassiopeia/about-me"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub sx={iconStyle} />
        </a>
      </li>
    </ul>
  );
}
