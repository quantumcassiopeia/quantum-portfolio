"use client";

import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { LottieRefCurrentProps } from "lottie-react";

const LottieClientSide = dynamic(() => import("lottie-react"), { ssr: false });

interface AnimatedLottieProps {
  src: string;
  loop?: boolean;
  width?: string | number;
  speed?: number;
  className?: string;
}

export default function AnimatedLottie({
  src,
  loop = true,
  width = "20rem",
  speed = 0.5,
  className = "",
}: AnimatedLottieProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => {
        console.error("load animation error:", err);
      });
  }, [src]);

  if (!animationData) return null;

  return (
    <LottieClientSide
      lottieRef={lottieRef}
      animationData={animationData}
      loop={loop}
      className={className}
      onDOMLoaded={() => {
        if (lottieRef.current) {
          lottieRef.current.setSpeed(speed);
        }
      }}
      style={{ width }}
    />
  );
}
