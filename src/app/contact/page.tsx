import dynamic from "next/dynamic";

const AnimatedLottie = dynamic(() => import("@/components/AnimatedLottie"), {
  ssr: false,
});

import crossplatform from "../../../public/animations/crossplatform.json";

export default function ContactPage() {
  return (
    <div>
      <h1>Contato</h1>
      <AnimatedLottie animationData={crossplatform} speed={0.5} width="30%" />
    </div>
  );
}
