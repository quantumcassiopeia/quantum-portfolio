"use client";

import { Locale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import TranslateIcon from "@mui/icons-material/Translate";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const handleLocaleChange = (nextLocale: Locale) => {
    // @ts-expect-error -- TypeScript will validate that only known `params`
    router.replace({ pathname, params }, { locale: nextLocale });
  };

  return (
    <div className="group relative p-3 flex flex-col items-center">
      <TranslateIcon className="cursor-pointer" />
      <div
        className="absolute top-full flex flex-col gap-y-2 p-3 items-start backdrop-blur-sm bg-[var(--bg-color)]/40 shadow-lg rounded-2xl text-[1rem]
        opacity-0 scale-95 pointer-events-none transition-all duration-700 ease-in-out
        group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
      >
        <button
          onClick={() => handleLocaleChange("en")}
          onTouchStart={() => handleLocaleChange("en")}
          className={`cursor-pointer w-full text-start focus:outline-none focus-visible:ring focus-visible:ring-blue-400 ${
            params.locale === "en" ? "font-bold" : ""
          }`}
        >
          English
        </button>
        <button
          onClick={() => handleLocaleChange("pt-BR")}
          onTouchCancel={() => handleLocaleChange("pt-BR")}
          className={`cursor-pointer w-full text-start focus:outline-none focus-visible:ring focus-visible:ring-blue-400 ${
            params.locale === "pt-BR" ? "font-bold" : ""
          }`}
        >
          Português
        </button>
      </div>
    </div>
  );
}
