"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function TextAnimation({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className: string;
  delay?: number;
}) {
  const el = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!el.current) return;

    requestAnimationFrame(() => {
      gsap.fromTo(
        el.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 2, delay, ease: "power1.out" }
      );
    });
  }, [delay]);

  return (
    <div>
      <h1 ref={el} className={`opacity-0 ${className}`}>
        {children}
      </h1>
    </div>
  );
}
