import { useTranslations } from "next-intl";

import AnimatedLottie from "@/components/AnimatedLottie";
import Form from "@/components/Form";

import contact from "../../../../public/animations/contact.json";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <main className=" flex flex-col mx-auto max-w-3xl mt-15 md:mt-20 p-4 pb-28">
      <section className="flex flex-col items-center gap-4 ">
        <AnimatedLottie animationData={contact} speed={1.5} />
        <h1 className="text-3xl font-bold text-center ">{t("title")}</h1>
        <p className=" leading-8 md:text-justify">{t("paragraph")}</p>
      </section>
      <section className="mt-16">
        <Form />
      </section>
    </main>
  );
}
