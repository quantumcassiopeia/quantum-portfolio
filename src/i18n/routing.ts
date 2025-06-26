import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pt-BR"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/about-us": {
      "pt-BR": "/sobre-nos",
    },
    "/cases": "/cases",
    "/cases/[slug]": "/cases/[slug]",
    "/contact": {
      "pt-BR": "/contato",
    },
  },
});
