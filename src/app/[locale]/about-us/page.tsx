import { useTranslations } from "next-intl";

import AnimatedLottie from "@/components/AnimatedLottie";
import { FadeInY } from "@/components/Animations";

export default function AboutUsPage() {
  const t = useTranslations("AboutUsPage");

  return (
    <div className=" flex flex-col mx-auto gap-y-6 max-w-3xl mt-15 md:mt-20 p-4 pb-28">
      <section className="flex flex-col items-center">
        <AnimatedLottie src="/animations/team.json" />
        <h1 className="text-3xl font-bold mb-8 text-center ">{t("title")}</h1>
        <FadeInY>
          <p className="leading-8 md:text-justify">
            {t("paragraph1.beforeLink")}{" "}
            <a
              href="https://www.linkedin.com/in/robert-rsouza/"
              className="text-rainbow-gradient"
              target="_blank"
            >
              Robert Souza
            </a>
            {t("paragraph1.afterLink")}
          </p>
          <br />
          <p className="leading-8 md:text-justify">{t("paragraph2")}</p>
          <br />
          <p className="leading-8 md:text-justify">
            {t("paragraph3")}{" "}
            <a
              className="text-rainbow-gradient"
              href="/pdfs/curriculo.pdf"
              target="_blank"
            >
              Português
            </a>{" "}
            |{" "}
            <a
              className="text-rainbow-gradient"
              href="/pdfs/resume.pdf"
              target="_blank"
            >
              English
            </a>
            .
          </p>
        </FadeInY>
      </section>

      <section></section>
    </div>
  );
}
