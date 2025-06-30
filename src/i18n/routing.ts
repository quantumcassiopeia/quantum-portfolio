import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pt-BR"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/about-us": {
      "pt-BR": "/sobre-nos",
    },
    "/cases": "/cases",
    "/contact": {
      "pt-BR": "/contato",
    },
  },
});
