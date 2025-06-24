import AnimatedLottie from "./AnimatedLottie";
import { useTranslations } from "next-intl";

export default function UnderMaintenance() {
  const t = useTranslations("UnderMaintenance");

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full p-4 ">
      <h3 className="text-3xl text-center ">{t("paragraph1")}</h3>
      <div className="md:scale-150">
        <AnimatedLottie src="/animations/maintenance.json" />
      </div>
      <h3 className="text-3xl text-center ">{t("paragraph2")}</h3>
      <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-cyan-200 opacity-20 blur-3xl z-[-1]"></div>
    </div>
  );
}
