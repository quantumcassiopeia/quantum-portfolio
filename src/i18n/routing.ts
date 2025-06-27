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
    "/contact": {
      "pt-BR": "/contato",
    },
  },
});
