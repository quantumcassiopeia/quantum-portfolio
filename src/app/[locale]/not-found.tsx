import { useTranslations } from "next-intl";
import AnimatedLottie from "@/components/AnimatedLottie";
import Button from "@/components/Button";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen ">
      <h1 className="text-5xl">{t("title")}</h1>
      <h2 className="text-2xl">{t("subtitle")}</h2>
      <AnimatedLottie src="/animations/404.json" />
      <p className="text-center max-w-92">{t("paragraph")}</p>
      <Link href="/" className="text-center max-w-92">
        <Button className="mt-4">{t("button")}</Button>
      </Link>
    </div>
  );
}
