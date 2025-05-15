"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText);

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

    gsap.fromTo(
      el.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, delay: delay, ease: "power1.out" }
    );
  }, [delay]);

  return (
    <div>
      <h1 ref={el} className={`opacity-0 ${className}`}>
        {children}
      </h1>
    </div>
  );
}
