import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

import AnimatedLottie from "@/components/AnimatedLottie";
import Form from "@/components/Form";

type Props = {
  params: {
    locale: Locale;
  };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({
    locale,
    namespace: "ContactPage.Metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <div className=" flex flex-col mx-auto max-w-3xl mt-15 md:mt-20 p-4 pb-28">
      <section className="flex flex-col items-center gap-4 ">
        <AnimatedLottie src="/animations/contact.json" speed={1.5} />
        <h1 className="text-3xl font-bold text-center ">{t("title")}</h1>
        <p className=" leading-8 md:text-justify">{t("paragraph")}</p>
      </section>
      <section className="mt-16">
        <Form />
      </section>
    </div>
  );
}
