import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  defaultLocale: "en",
  locales: ["en", "pt-BR"],
  localePrefix: "as-needed",
});
