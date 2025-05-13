"use client";

import { useRef, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface AnimatedLottieProps {
  animationData: object;
  loop?: boolean;
  width?: string | number;
  speed?: number;
}

export default function AnimatedLottie({
  animationData,
  loop = true,
  width = "30%",
  speed = 0.5,
}: AnimatedLottieProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed);
    }
  }, [speed]);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={loop}
      style={{ width }}
    />
  );
}
