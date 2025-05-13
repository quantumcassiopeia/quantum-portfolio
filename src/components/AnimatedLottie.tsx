"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { LottieRefCurrentProps } from "lottie-react";

const LottieClientSide = dynamic(() => import("lottie-react"), { ssr: false });

interface AnimatedLottieProps {
  animationData: object;
  loop?: boolean;
  width?: string | number;
  speed?: number;
  className?: string;
}

export default function AnimatedLottie({
  animationData,
  loop = true,
  width = "20rem",
  speed = 0.5,
  className = "",
}: AnimatedLottieProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed);
    }
  }, [speed]);

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
