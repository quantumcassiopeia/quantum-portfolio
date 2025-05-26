import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pt-BR"],
  defaultLocale: "en",
  localeCookie: {
    name: "USER_LOCALE",
    maxAge: 60 * 60 * 24 * 365,
  },
  pathnames: {
    "/": "/",
    "/pathnames": {
      "pt-BR": "/caminhos",
    },
  },
});
