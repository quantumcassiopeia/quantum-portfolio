import { useTranslations } from "next-intl";

import TextAnimation from "@/components/TextAnimation";
import { AdvantageCard, CaseCard } from "@/components/Cards";
import { FadeInY } from "@/components/Animations";

export default function Home() {
  const t = useTranslations("Homepage");

  const caseCards = useTranslations("Cards").raw("caseCards") as {
    title: string;
    summary: string;
    slug: string;
  }[];

  const advantageCards = useTranslations("Cards").raw("advantageCards") as {
    title: string;
    description: string;
  }[];

  return (
    <div className="className flex flex-col gap-28 overflow-x-hidden">
      {/* Hero */}

      <section className="flex flex-col gap-y-5 justify-center bg-rainbow-gradient min-h-[30rem] mx-1.5 mt-2.5 p-4 lg:pl-20  rounded-4xl overflow-x-hidden ">
        <TextAnimation delay={0.5} className="text-6xl md:text-8xl text-black">
          {t("title")}
        </TextAnimation>
        <TextAnimation
          delay={1.5}
          className="text-[1.25rem] md:text-2xl md:w-[32rem] text-gray-700 "
        >
          {t("subtitle")}
        </TextAnimation>
      </section>

      {/* Advantages */}

      <section className="px-2">
        <div className="flex flex-col md:items-center gap-4 md:flex-row">
          <h2 className="text-3xl w-96">
            {t("advantagesSectionTitle")}
            <span className="text-rainbow-gradient">
              {t("advantagesSectionTitleSpan")}
            </span>
          </h2>
          <div className="w-40 md:w-full h-0.5 bg-multicolor rounded-full" />
        </div>
        <FadeInY>
          <p className="max-w-xl py-8">{t("advantagesSectionParagraph")}</p>
        </FadeInY>
        <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-12">
          {advantageCards.map((card, index) => (
            <AdvantageCard
              key={index}
              src={`/animations/advantage${index + 1}.json`}
              {...card}
            />
          ))}
        </div>
      </section>

      {/* Creative Cases */}

      {
        <section className="flex flex-col justify-center px-2">
          <div className="flex flex-col md:items-center gap-4 md:flex-row">
            <h2 className="text-3xl w-96 md:order-1">
              {t("creativeCasesSectionTitle")}
            </h2>
            <div className="w-40 md:w-full h-0.5 bg-multicolor rounded-full" />
          </div>
          <FadeInY>
            <p className="max-w-xl py-10 md:ml-auto">
              {t("creativeCasesSectionParagraph")}
            </p>
          </FadeInY>
          <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-center items-center">
            {caseCards.map((card, index) => (
              <CaseCard
                key={index}
                src={`/cases/${card.slug}/cardCover.webp`}
                href={`/cases/${card.slug}`}
                {...card}
              />
            ))}
          </div>
        </section>
      }
    </div>
  );
}
