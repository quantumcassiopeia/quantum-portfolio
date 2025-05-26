"use client";

import { Locale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import TranslateIcon from "@mui/icons-material/Translate";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const handleLocaleChange = (locale: Locale) => {
    // Copia os params para não modificar o original
    const restParams = { ...params };
    delete restParams.locale; // remove o 'locale' para não duplicar na query

    router.replace(
      {
        pathname,
        query: restParams,
      },
      {
        locale,
      }
    );
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
          className="cursor-pointer focus:outline-none focus:ring focus:ring-blue-400"
        >
          English
        </button>
        <button
          onClick={() => handleLocaleChange("pt-BR")}
          className="cursor-pointer focus:outline-none focus:ring focus:ring-blue-400"
        >
          Português
        </button>
      </div>
    </div>
  );
}
