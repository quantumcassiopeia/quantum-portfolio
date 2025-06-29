"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function FadeInY({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const items = containerRef.current!.querySelectorAll(".animated-item");

      gsap.fromTo(
        items,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          stagger: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [children]);

  return (
    <div ref={containerRef} className={`overflow-clip ${className}`}>
      {React.Children.map(children, (child, index) => (
        <div className="animated-item" key={index}>
          {child}
        </div>
      ))}
    </div>
  );
}

export function FadeInSide({
  children,
  className,
  side = "right",
}: {
  children: React.ReactNode;
  className?: string;
  side?: "left" | "right";
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const ctx = gsap.context(() => {
        const items = containerRef.current!.querySelectorAll(".animated-item");

        gsap.fromTo(
          items,
          { x: side === "left" ? -100 : 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none play",
            },
          }
        );
      }, containerRef);

      return () => ctx.revert();
    },
    {
      dependencies: [children, side, className],
      scope: containerRef,
      revertOnUpdate: true,
    }
  );

  return (
    <div ref={containerRef} className={`overflow-clip ${className}`}>
      {React.Children.map(children, (child, index) => (
        <div className="animated-item" key={index}>
          {child}
        </div>
      ))}
    </div>
  );
}
