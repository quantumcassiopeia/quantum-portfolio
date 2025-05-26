import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pt-BR"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/pathnames": {
      "pt-BR": "/caminhos",
    },
  },
  localePrefix: "as-needed",
});
