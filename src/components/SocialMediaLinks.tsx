"use client";

import { LinkedIn, GitHub, WhatsApp, AttachEmail } from "@mui/icons-material";
import { useState, useEffect } from "react";

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

type SocialMediaLinksProps = {
  position: "flex" | "fixed";
};

export default function SocialMediaLinks({ position }: SocialMediaLinksProps) {
  const [showContent, setShowContent] = useState(position === "flex");

  useEffect(() => {
    if (position === "flex") return;

    const handleScroll = () => {
      setShowContent(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  if (!showContent) return null;

  const positionStyle =
    position === "flex"
      ? "flex flex-wrap md:max-w-[8rem]"
      : "scale-75 fixed top-1/2 right-0 transform -translate-y-1/2 z-50 bg-white py-2 px-1 rounded-3xl shadow-[0_3px_8px_rgba(0,0,0,0.24)]";

  return (
    <ul className={positionStyle}>
      <li>
        <a href="/contact">
          <AttachEmail sx={iconStyle} />
        </a>
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
