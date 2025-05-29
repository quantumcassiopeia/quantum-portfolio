// React Config

import { useTranslations } from "next-intl";

// Animations

import crossplatform from "../../../public/animations/crossplatform.json";
import fast from "../../../public/animations/fast.json";
import intuitive from "../../../public/animations/intuitive.json";
import search from "../../../public/animations/search.json";

// Components
import TextAnimation from "@/components/TextAnimation";
import CardAdvantages from "@/components/CardAdvantages";
import CardCreativeCases from "@/components/CardCreativeCases";

// Code

export default function Home() {
  const t = useTranslations("HomePage");

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
        <CardAdvantages
          title={t("CardAdvantages.Card1.title")}
          description={t("CardAdvantages.Card1.description")}
          animation={crossplatform}
        />
        <CardAdvantages
          title={t("CardAdvantages.Card2.title")}
          description={t("CardAdvantages.Card2.description")}
          animation={fast}
        />
        <CardAdvantages
          title={t("CardAdvantages.Card3.title")}
          description={t("CardAdvantages.Card3.description")}
          animation={intuitive}
        />
        <CardAdvantages
          title={t("CardAdvantages.Card4.title")}
          description={t("CardAdvantages.Card4.description")}
          animation={search}
        />
      </section>

      {/* Creative Cases */}

      <section className="flex flex-col justify-center px-4 ">
        <h2 className="text-4xl leading-30 text-center  ">
          {t("CreativeCases.title")}
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-center items-center">
          <CardCreativeCases
            href="/cases/1"
            title={t("CreativeCases.cards.case1.title")}
            image="/cases/1/case1.png"
            description={t("CreativeCases.cards.case1.description")}
          />
          <CardCreativeCases
            href="/cases/2"
            title={t("CreativeCases.cards.case2.title")}
            image="/cases/2/case2.png"
            description={t("CreativeCases.cards.case2.description")}
          />
          <CardCreativeCases
            href="/cases/3"
            title={t("CreativeCases.cards.case3.title")}
            image="/cases/3/case3.png"
            description={t("CreativeCases.cards.case3.description")}
          />
          <CardCreativeCases
            href="/cases/4"
            title={t("CreativeCases.cards.case4.title")}
            image="/cases/4/case4.png"
            description={t("CreativeCases.cards.case4.description")}
          />
        </div>
      </section>
    </main>
  );
}
