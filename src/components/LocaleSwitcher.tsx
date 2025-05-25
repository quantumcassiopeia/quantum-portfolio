"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation"; // custom wrapper do next-intl/navigation

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  function handleLocaleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedLocale = event.target.value;

    startTransition(() => {
      router.replace(
        // @ts-expect-error: os types estão OK em tempo de execução
        { pathname, params },
        { locale: selectedLocale }
      );
    });
  }

  return (
    <div>
      <select onChange={handleLocaleChange} value={locale} disabled={isPending}>
        <option
          className="bg-[var(--bg-color)] text-[var(--text-color)]"
          value="en"
        >
          EN
        </option>
        <option value="pt-BR">PT</option>
      </select>
    </div>
  );
}
