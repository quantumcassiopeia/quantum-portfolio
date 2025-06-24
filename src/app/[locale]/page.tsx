// React Config

import { useTranslations } from "next-intl";

// Animations

// Components
import TextAnimation from "@/components/TextAnimation";
import { AdvantageCard, CaseCard } from "@/components/Cards";

// Code

export default function Home() {
  const t = useTranslations("Homepage");
  const caseCards = useTranslations("Cards").raw("caseCards") as {
    title: string;
    description: string;
  }[];

  const advantageCards = useTranslations("Cards").raw("advantageCards") as {
    title: string;
    description: string;
  }[];

  return (
    <main className="pb-28">
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

      <section className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-12 p-8">
        {advantageCards.map((card, index) => (
          <AdvantageCard
            key={index}
            src={`/animations/advantage${index + 1}.json`}
            {...card}
          />
        ))}
      </section>

      {/* Creative Cases */}

      <section className="flex flex-col justify-center px-4">
        <h2 className="text-4xl leading-30 text-center  ">
          {t("CreativeCases.title")}
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-center items-center">
          {caseCards.map((card, index) => (
            <CaseCard
              key={index}
              src={`/cases/${index + 1}/case${index + 1}.png`}
              href={`/cases/${index + 1}`}
              {...card}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
