import { notFound } from "next/navigation";
import path from "path";
import { promises as fs } from "fs";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import CheckIcon from "../../../../../public/icons/check.svg";
import { FadeInSide, FadeInY } from "@/components/Animations";

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
  const tags = t.raw("tags") as string[];
  const solutionItems = t.raw("solutions.items") as string[];

  return (
    <div className="mt-15 md:mt-20 mb-10 px-1">
      {/* hero section */}

      <section className="relative base-shadow rounded-4xl overflow-clip">
        <h1 className=" bg-white text-black text-center p-3 rounded-2xl absolute z-10 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 text-2xl md:text-5xl">
          {t("title")}
        </h1>
        <div className="bg-black relative w-full h-70 md:h-[32rem]">
          <Image
            src={`/cases/${slug}/pageHero.webp`}
            alt={t("title")}
            fill
            priority
            className="object-cover opacity-35"
          />
        </div>
      </section>

      {/* tags */}

      <ul>
        <FadeInY className="flex flex-wrap gap-4 justify-center py-10">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-linear-to-bl text-white from-[#ff5e5e] to-[#bf75ff] px-2 py-0.5 rounded-full"
            >
              {tag}
            </li>
          ))}
        </FadeInY>
      </ul>

      {/* content section */}

      <section className="max-w-3xl mx-auto px-2">
        <p>{t("content")}</p>
      </section>

      {/* solutions section */}

      <section className="flex gap-y-12 flex-col items-center md:items-start md:flex-row py-48 px-2">
        <FadeInSide>
          <h2 className="text-3xl">{t("solutions.title")}</h2>
          <div className="w-40 h-2 bg-multicolor rounded-full my-5" />
          <ul className="flex flex-col gap-3 pt-7">
            {solutionItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckIcon className="h-6 w-6 shrink-0 mr-3" />
                {item}
              </li>
            ))}
          </ul>
        </FadeInSide>
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

      {/* resume section */}

      <section className="max-w-3xl mx-auto px-2">
        <FadeInSide>
          <div className="w-40 h-2 bg-multicolor rounded-full mb-5" />
          <p>{t("resume")}</p>
        </FadeInSide>
      </section>
    </div>
  );
}
