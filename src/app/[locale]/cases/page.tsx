import AnimatedLottie from "@/components/AnimatedLottie";
import { FadeInY } from "@/components/Animations";
import { CaseCard } from "@/components/Cards";
import { Locale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "CasesPage.Metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `https://qcsolutions.tech${
        locale !== "en" ? `/${locale}` : ""
      }/cases`,
    },
  };
}
export default function CasesPage() {
  const t = useTranslations("CasesPage");

  const caseCards = useTranslations("Cards").raw("caseCards") as {
    title: string;
    summary: string;
    slug: string;
  }[];

  return (
    <div className="flex flex-col mx-auto mt-15 md:mt-20 p-4 pb-28 px-2">
      <section className="flex flex-col items-center max-w-3xl mx-auto">
        <AnimatedLottie src="/animations/cases.json" />
        <h1 className="text-3xl font-bold mb-8 text-center ">{t("title")}</h1>
        <FadeInY className="space-y-4">
          <p className="leading-8 md:text-justify">
            {t("paragraph1")}{" "}
            <strong className="text-rainbow-gradient">
              {t("paragraph1Strong")}
            </strong>
          </p>
          <p className="leading-8 md:text-justify">{t("paragraph2")}</p>
          <p className="leading-8 md:text-justify">
            <strong className="text-rainbow-gradient">
              {t("paragraph3Strong")}
            </strong>{" "}
            {t("paragraph3")}
          </p>
        </FadeInY>
      </section>

      <section>
        <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-center items-center mt-24 ">
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
    </div>
  );
}
