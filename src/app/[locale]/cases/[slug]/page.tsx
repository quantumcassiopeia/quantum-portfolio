import { notFound } from "next/navigation";
import path from "path";
import { promises as fs } from "fs";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function CasesLayout({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const stat = await fs.stat(
      path.join(process.cwd(), "public", "cases", slug)
    );
    if (!stat.isDirectory()) {
      return notFound();
    }
  } catch {
    return notFound();
  }

  const t = await getTranslations(`CasesData.${slug}`);

  return (
    <div className="mt-15 md:mt-20 mb-10 px-1">
      <section className="relative base-shadow rounded-4xl overflow-clip ">
        <h1 className=" bg-white text-black p-3 rounded-2xl absolute z-10 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 text-2xl md:text-5xl">
          {t("title")}
        </h1>
        <div className=" bg-black relative w-full h-70 md:h-[32rem]">
          <Image
            src={`/cases/${slug}/pageHero.webp`}
            alt={t("title")}
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>
      </section>
      <section className="flex flex-col gap-y-10 items-center md:items-start md:flex-row pt-10 md:pt-25 px-4">
        <div className="md:w-1/2 md:pr-8">
          <p className="leading-8">{t("paragraph1")}</p>
          <br />
          <p className="leading-8">{t("paragraph2")}</p>
        </div>
        <div className="bg-black flex items-center max-h-[30rem] w-full md:w-1/2 overflow-clip px-0.5 py-5 base-shadow">
          <video
            src={`/cases/${slug}/video.webm`}
            autoPlay
            loop
            playsInline
            muted
          ></video>
        </div>
      </section>
    </div>
  );
}
